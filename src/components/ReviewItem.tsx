import React from 'react';
import { Star, ThumbsUp, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; // Adicionado

interface ReviewPhoto {
  src: string;
  alt: string;
}

export interface Review {
  id: string;
  reviewerName: string;
  reviewerLocation: string;
  visitDate: string; // e.g., "ago/2025"
  rating: number;
  reviewTitle: string;
  reviewText: string;
  photos: ReviewPhoto[];
  likes: number;
  datePosted: string; // e.g., "há 2 semanas" ou data formatada
  source: 'Comunidade' | 'Google Reviews'; // Nova propriedade
}

interface ReviewItemProps {
  review: Review;
  onPhotoClick: (photos: ReviewPhoto[], initialIndex: number) => void;
  onLike: (reviewId: string) => void;
  onReport: (reviewId: string) => void;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review, onPhotoClick, onLike, onReport }) => {
  const renderStars = (count: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < count ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
        )}
      />
    ));
  };

  const getAvatarInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <article className="review-item">
      <div className="review-header">
        <div className="reviewer-info">
          <div className="reviewer-avatar">
            {getAvatarInitials(review.reviewerName)}
          </div>
          <div className="reviewer-details">
            <h4 className="font-semibold text-base">{review.reviewerName}</h4>
            <span className="reviewer-location block text-sm text-muted-foreground">{review.reviewerLocation}</span>
            <span className="visit-date block text-xs text-muted-foreground">Visitou em {review.visitDate}</span>
          </div>
        </div>
        <div className="review-rating flex items-center gap-1">
          <div className="flex">{renderStars(review.rating)}</div>
          <span className="font-semibold text-sm text-muted-foreground">{review.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="review-content">
        <h5 className="text-lg font-bold mb-2">{review.reviewTitle}</h5>
        <p className="text-base text-foreground mb-4">{review.reviewText}</p>
        
        {review.photos.length > 0 && (
          <div className="review-photos">
            {review.photos.map((photo, index) => (
              <img
                key={index}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                onClick={() => onPhotoClick(review.photos, index)}
                className="w-24 h-18 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="review-footer">
        <span className="review-date text-sm text-muted-foreground">{review.datePosted}</span>
        <span className="review-source text-sm text-muted-foreground ml-auto">Fonte: {review.source}</span> {/* Exibe a fonte */}
        {review.source === 'Comunidade' && ( // Ações apenas para reviews da comunidade
          <div className="review-actions flex gap-2 ml-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => onLike(review.id)}
            >
              <ThumbsUp className="h-4 w-4 mr-1" /> {review.likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => onReport(review.id)}
            >
              <Flag className="h-4 w-4 mr-1" /> Reportar
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};

export default ReviewItem;