import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; // Adicionado

interface Photo {
  src: string;
  alt: string;
}

interface PhotoModalProps {
  isOpen: boolean;
  photos: Photo[];
  initialIndex: number;
  onClose: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, photos, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const navigatePhoto = useCallback((direction: number) => {
    setCurrentIndex(prevIndex => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = photos.length - 1;
      if (newIndex >= photos.length) newIndex = 0;
      return newIndex;
    });
  }, [photos.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'ArrowLeft') {
      navigatePhoto(-1);
    } else if (e.key === 'ArrowRight') {
      navigatePhoto(1);
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [isOpen, navigatePhoto, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className={cn("photo-modal", isOpen && "active")} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <img id="modalImage" src={currentPhoto.src} alt={currentPhoto.alt} className="max-w-[90vw] max-h-[90vh] object-contain" />
        
        {photos.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50"
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); navigatePhoto(-1); }} // Tipado
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50"
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); navigatePhoto(1); }} // Tipado
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoModal;