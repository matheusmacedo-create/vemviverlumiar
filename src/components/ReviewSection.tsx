import React, { useState } from 'react'; // 'useEffect' removido
import ReviewForm from './ReviewForm';
import ReviewItem, { Review } from './ReviewItem';
import PhotoModal from './PhotoModal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils'; // Adicionado

interface ReviewPhoto {
  src: string;
  alt: string;
}

// Dummy data for initial reviews
const initialReviews: Review[] = [
  {
    id: '1',
    reviewerName: 'Marina Santos',
    reviewerLocation: 'São Paulo, SP',
    visitDate: 'ago/2025',
    rating: 5,
    reviewTitle: 'Experiência incrível no Pico da Caledônia!',
    reviewText: 'A trilha até o Pico da Caledônia foi desafiadora mas muito recompensadora! A vista lá de cima é indescritível. Recomendo muito contratar um guia local - fez toda diferença na segurança e conhecimento sobre a região. Voltarei com certeza!',
    photos: [
      { src: "https://via.placeholder.com/120x90?text=Vista+do+Pico", alt: "Vista do Pico da Caledônia" },
      { src: "https://via.placeholder.com/120x90?text=Trilha", alt: "Trilha do Pico" },
      { src: "https://via.placeholder.com/120x90?text=Grupo", alt: "Grupo na trilha" },
    ],
    likes: 12,
    datePosted: 'há 2 semanas',
  },
  {
    id: '2',
    reviewerName: 'Carlos Oliveira',
    reviewerLocation: 'Belo Horizonte, MG',
    visitDate: 'jul/2025',
    rating: 4,
    reviewTitle: 'Cachoeiras maravilhosas para família',
    reviewText: 'Levei minha família para conhecer as cachoeiras e foi uma experiência muito boa! As crianças adoraram o Poço Paraíso. Só sugiro levar mais repelente porque os mosquitos estavam bem ativos. No geral, recomendo!',
    photos: [
      { src: "https://via.placeholder.com/120x90?text=Poço+Paraíso", alt: "Poço Paraíso" },
      { src: "https://via.placeholder.com/120x90?text=Família", alt: "Família na cachoeira" },
    ],
    likes: 8,
    datePosted: 'há 1 mês',
  },
  {
    id: '3',
    reviewerName: 'Ana Costa',
    reviewerLocation: 'Rio de Janeiro, RJ',
    visitDate: 'jun/2025',
    rating: 5,
    reviewTitle: 'Natureza preservada e energia renovada',
    reviewText: 'Como bióloga, fiquei impressionada com a diversidade da fauna e flora. Consegui avistar várias espécies de aves, incluindo o beija-flor-de-fronte-violeta! O trabalho de conservação da região está de parabéns. Um verdadeiro santuário ecológico.',
    photos: [],
    likes: 15,
    datePosted: 'há 2 meses',
  },
];

const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [filter, setFilter] = useState('recent');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhotos, setModalPhotos] = useState<ReviewPhoto[]>([]);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  const calculateRatingBreakdown = () => {
    const breakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach(review => {
      if (review.rating >= 1 && review.rating <= 5) {
        breakdown[review.rating as keyof typeof breakdown]++;
      }
    });
    return breakdown;
  };

  const averageRating = calculateAverageRating();
  const ratingBreakdown = calculateRatingBreakdown();

  const sortedReviews = [...reviews].sort((a, b) => {
    if (filter === 'recent') {
      // Simple string comparison for dummy data, in real app use Date objects
      return b.datePosted.localeCompare(a.datePosted); 
    }
    if (filter === 'rating') {
      return b.rating - a.rating;
    }
    if (filter === 'photos') {
      return b.photos.length - a.photos.length;
    }
    return 0;
  });

  const handleReviewSubmit = (formData: FormData) => {
    // Simulate API call
    toast.loading('Publicando sua review...');
    setTimeout(() => {
      const newReview: Review = {
        id: (reviews.length + 1).toString(),
        reviewerName: formData.get('reviewerName') as string,
        reviewerLocation: formData.get('reviewerLocation') as string,
        visitDate: formData.get('visitDate') as string,
        rating: parseInt(formData.get('rating') as string),
        reviewTitle: formData.get('reviewTitle') as string,
        reviewText: formData.get('reviewText') as string,
        photos: Array.from(formData.getAll('photos[]')).map(file => ({
          src: URL.createObjectURL(file as File), // Create object URL for preview
          alt: (file as File).name,
        })),
        likes: 0,
        datePosted: 'agora mesmo',
      };
      setReviews(prev => [newReview, ...prev]);
      toast.success('Review publicada com sucesso!');
    }, 1500);
  };

  const handlePhotoClick = (photos: ReviewPhoto[], initialIndex: number) => {
    setModalPhotos(photos);
    setModalInitialIndex(initialIndex);
    setIsModalOpen(true);
  };

  const handleLike = (reviewId: string) => {
    setReviews(prev =>
      prev.map(review =>
        review.id === reviewId ? { ...review, likes: review.likes + 1 } : review
      )
    );
    toast.info('Você curtiu esta review!');
  };

  const handleReport = (_reviewId: string) => { // reviewId renomeado para _reviewId
    toast.warning('Review reportada para moderação.');
    // In a real app, send report to backend
  };

  // Schema.org for AggregateRating
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": averageRating.toFixed(1),
    "reviewCount": reviews.length.toString()
  };

  // Schema.org for individual Reviews (first few)
  const reviewSchemas = sortedReviews.slice(0, 3).map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString()
    },
    "author": {
      "@type": "Person",
      "name": review.reviewerName
    },
    "reviewBody": review.reviewText,
    "datePublished": new Date().toISOString().split('T')[0] // Placeholder, ideally use actual date
  }));

  return (
    <section id="comentarios-reviews" className="py-8">
      <h2 className="text-3xl font-bold text-primary mb-6">💬 Comentários & Reviews</h2>
      <p className="text-lg text-gray-700 mb-8">Compartilhe sua experiência em Nova Friburgo! Suas fotos e relatos ajudam outros viajantes a descobrir os melhores lugares.</p>

      {/* Schema.org for AggregateRating */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      {/* Schema.org for individual Reviews */}
      {reviewSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Estatísticas das Reviews */}
      <div className="review-stats">
        <div className="rating-overview">
          <div className="rating-number">{averageRating.toFixed(1)}</div>
          <div className="rating-stars">
            <div className="flex justify-center text-yellow-400 text-xl mb-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="rating-text">Baseado em {reviews.length} avaliações</div>
          </div>
        </div>
        <div className="rating-breakdown">
          {[5, 4, 3, 2, 1].map(star => (
            <div key={star} className="rating-bar">
              <span className="rating-label">{star} estrelas</span>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${(ratingBreakdown[star as keyof typeof ratingBreakdown] / reviews.length) * 100 || 0}%` }}
                ></div>
              </div>
              <span className="rating-count">{ratingBreakdown[star as keyof typeof ratingBreakdown]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formulário para Nova Review */}
      <ReviewForm onSubmit={handleReviewSubmit} />

      {/* Lista de Reviews Existentes */}
      <div className="reviews-container">
        <h3 className="text-xl font-semibold mb-4">📝 Reviews dos Visitantes</h3>
        
        <div className="review-filters mb-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Mais recentes</SelectItem>
              <SelectItem value="rating">Melhor avaliadas</SelectItem>
              <SelectItem value="photos">Com fotos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="reviews-list">
          {sortedReviews.map(review => (
            <ReviewItem
              key={review.id}
              review={review}
              onPhotoClick={handlePhotoClick}
              onLike={handleLike}
              onReport={handleReport}
            />
          ))}
        </div>

        {/* <div className="load-more-container">
          <Button variant="outline" onClick={() => toast.info('Funcionalidade de carregar mais em breve!')}>
            Carregar mais reviews
          </Button>
        </div> */}
      </div>

      <PhotoModal
        isOpen={isModalOpen}
        photos={modalPhotos}
        initialIndex={modalInitialIndex}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

const renderStars = (count: number) => {
  return [...Array(5)].map((_, i) => (
    <Star
      key={i}
      className={cn(
        "h-5 w-5",
        i < count ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
      )}
    />
  ));
};

export default ReviewSection;