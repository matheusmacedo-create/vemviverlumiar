import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingInputProps {
  rating: number;
  onRatingChange: (newRating: number) => void;
  maxStars?: number;
  className?: string;
}

const StarRatingInput: React.FC<StarRatingInputProps> = ({
  rating,
  onRatingChange,
  maxStars = 5,
  className,
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleClick = (index: number) => {
    onRatingChange(index + 1);
  };

  const handleMouseEnter = (index: number) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const displayRating = hoverRating || rating;

  return (
    <div className={cn("flex gap-1", className)} onMouseLeave={handleMouseLeave}>
      {[...Array(maxStars)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-6 w-6 cursor-pointer transition-colors duration-200",
            displayRating > index ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
          )}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
        />
      ))}
    </div>
  );
};

export default StarRatingInput;