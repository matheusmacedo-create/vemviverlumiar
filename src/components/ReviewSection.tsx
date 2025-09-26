import React, { useState } from 'react';
import ReviewItem, { Review } from './ReviewItem';
import PhotoModal from './PhotoModal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, MessageSquareText } from 'lucide-react'; // Importa MessageSquareText
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button'; // Importa Button

interface ReviewPhoto {
  src: string;
  alt: string;
}

interface ReviewSectionProps {
  reviews: Review[];
  onOpenReviewForm: () => void; // Nova prop para abrir o formulário
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, onOpenReviewForm }) => {
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
      const dateA = a.datePosted === 'agora mesmo' ? new Date() : new Date(Date.now() - (a.datePosted.includes('semanas') ? parseInt(a.datePosted) * 7 * 24 * 60 * 60 * 1000 : a.datePosted.includes('mês') ? parseInt(a.datePosted) * 30 * 24 * 60 * 60 * 1000 : 0));
      const dateB = b.datePosted === 'agora mesmo' ? new Date() : new Date(Date.now() - (b.datePosted.includes('semanas') ? parseInt(b.datePosted) * 7 * 24 * 60 * 60 * 1000 : b.datePosted.includes('mês') ? parseInt(b.datePosted) * 30 * 24 * 60 * 60 * 1000 : 0));
      return dateB.getTime() - dateA.getTime();
    }
    if (filter === 'rating') {
      return b.rating - a.rating;
    }
    if (filter === 'photos') {
      return b.photos.length - a.photos.length;
    }
    return 0;
  });

  const handlePhotoClick = (photos: ReviewPhoto[], initialIndex: number) => {
    setModalPhotos(photos);
    setModalInitialIndex(initialIndex);
    setIsModalOpen(true);
  };

  const handleLike = (_reviewId: string) => {
    toast.info('Você curtiu esta review!');
  };

  const handleReport = (_reviewId: string) => {
    toast.warning('Review reportada para moderação.');
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": averageRating.toFixed(1),
    "reviewCount": reviews.length.toString()
  };

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
    "datePublished": new Date().toISOString().split('T')[0]
  }));

  return (
    <section id="comentarios-reviews" className="py-8">
      <h2 className="text-3xl font-bold text-primary mb-6">💬 Comentários & Reviews</h2>
      <p className="text-lg text-gray-700 mb-8">Compartilhe sua experiência em Nova Friburgo! Suas fotos e relatos ajudam outros viajantes a descobrir os melhores lugares.</p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      {reviewSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

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

      {/* Botão para abrir o formulário de review */}
      <div className="text-center my-8">
        <Button onClick={onOpenReviewForm} className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-6 py-3 rounded-full shadow-lg">
          <MessageSquareText className="h-5 w-5 mr-2" /> Escrever uma Review
        </Button>
      </div>

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