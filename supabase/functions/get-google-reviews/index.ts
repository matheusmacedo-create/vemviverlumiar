import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function getInitials(name: string): string {
  const parts = name.split(' ');
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { placeId } = await req.json();
    const googleApiKey = Deno.env.get('GOOGLE_API_KEY');

    if (!googleApiKey) {
      return new Response(JSON.stringify({ error: 'Google API Key not configured.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    if (!placeId) {
      return new Response(JSON.stringify({ error: 'Missing placeId in request body.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${googleApiKey}`;
    const googleResponse = await fetch(url);
    const googleData = await googleResponse.json();

    const reviews = [];
    if (googleData.result && googleData.result.reviews) {
      for (const review of googleData.result.reviews) {
        reviews.push({
          id: `google-${review.time}-${review.author_name.replace(/\s/g, '')}`, // Unique ID for Google reviews
          reviewerName: review.author_name,
          reviewerLocation: 'Google User', // Google doesn't provide specific location
          visitDate: new Date(review.time * 1000).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }),
          rating: review.rating,
          reviewTitle: review.text.substring(0, 50) + (review.text.length > 50 ? '...' : ''), // Take first 50 chars as title
          reviewText: review.text,
          photos: [], // Google reviews usually don't have direct photo URLs in this API
          likes: 0, // Google reviews don't expose likes via this API
          datePosted: new Date(review.time * 1000).toLocaleDateString('pt-BR'), // Format date
          source: 'Google Reviews',
        });
      }
    }

    return new Response(JSON.stringify(reviews), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});