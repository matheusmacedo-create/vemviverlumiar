import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import StarRatingInput from './StarRatingInput';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ReviewFormProps {
  onSubmit: (reviewData: FormData) => void;
}

const MAX_PHOTOS = 5;
const MAX_TEXT_LENGTH = 500;
const MAX_FILE_SIZE_MB = 5; // 5MB

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [reviewerName, setReviewerName] = useState('');
  const [reviewLocation, setReviewLocation] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [uploadedPhotos, setUploadedPhotos] = useState<Array<{ file: File; url: string; name: string }>>([]);
  const [consent, setConsent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (uploadedPhotos.length + files.length > MAX_PHOTOS) {
      toast.error(`Máximo de ${MAX_PHOTOS} fotos permitidas!`);
      return;
    }

    files.forEach(file => {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        toast.error(`Arquivo ${file.name} é muito grande. Máximo ${MAX_FILE_SIZE_MB}MB por foto.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedPhotos(prev => [
          ...prev,
          { file: file, url: e.target?.result as string, name: file.name }
        ]);
      };
      reader.readAsDataURL(file);
    });
    // Clear the input so the same file can be selected again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast.error('Por favor, selecione uma avaliação!');
      return;
    }
    if (!consent) {
      toast.error('Você deve concordar em compartilhar suas fotos e comentários.');
      return;
    }

    const formData = new FormData();
    formData.append('reviewerName', reviewerName);
    formData.append('reviewerLocation', reviewLocation);
    formData.append('visitDate', visitDate);
    formData.append('rating', rating.toString());
    formData.append('reviewTitle', reviewTitle);
    formData.append('reviewText', reviewText);
    
    uploadedPhotos.forEach(photo => {
      formData.append('photos[]', photo.file);
    });

    onSubmit(formData);
    resetForm();
  };

  const resetForm = () => {
    setReviewerName('');
    setReviewLocation('');
    setVisitDate('');
    setRating(0);
    setReviewTitle('');
    setReviewText('');
    setUploadedPhotos([]);
    setConsent(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const charCountColor = cn({
    'text-red-600': reviewText.length > 450,
    'text-orange-500': reviewText.length > 400 && reviewText.length <= 450,
    'text-muted-foreground': reviewText.length <= 400,
  });

  return (
    <div className="review-form-container">
      <h3 className="text-xl font-semibold mb-4">✍️ Compartilhe sua experiência</h3>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <Label htmlFor="reviewerName">Seu nome:</Label>
          <Input
            type="text"
            id="reviewerName"
            name="reviewerName"
            required
            placeholder="Como você gostaria de aparecer?"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <Label htmlFor="reviewLocation">Cidade/Estado:</Label>
          <Input
            type="text"
            id="reviewLocation"
            name="reviewLocation"
            placeholder="Ex: Rio de Janeiro, RJ"
            value={reviewLocation}
            onChange={(e) => setReviewLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <Label htmlFor="visitDate">Data da visita:</Label>
          <Input
            type="month"
            id="visitDate"
            name="visitDate"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <Label>Avaliação geral:</Label>
          <StarRatingInput rating={rating} onRatingChange={setRating} />
          <input type="hidden" id="rating" name="rating" value={rating} />
        </div>

        <div className="form-group">
          <Label htmlFor="reviewTitle">Título da sua review:</Label>
          <Input
            type="text"
            id="reviewTitle"
            name="reviewTitle"
            required
            placeholder="Ex: Experiência incrível no Pico da Caledônia!"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <Label htmlFor="reviewText">Conte sobre sua experiência:</Label>
          <Textarea
            id="reviewText"
            name="reviewText"
            required
            rows={5}
            placeholder="Compartilhe detalhes sobre os lugares que visitou, dicas úteis, o que mais gostou, sugestões para outros viajantes..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            maxLength={MAX_TEXT_LENGTH}
          />
          <div className={cn("char-counter", charCountColor)}>
            <span>{reviewText.length}</span>/{MAX_TEXT_LENGTH} caracteres
          </div>
        </div>

        <div className="form-group">
          <Label>📸 Adicione suas fotos (até {MAX_PHOTOS} fotos):</Label>
          <div className="photo-upload-area" onClick={() => fileInputRef.current?.click()}>
            <input
              type="file"
              id="photoInput"
              name="photos"
              multiple
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handlePhotoUpload}
              ref={fileInputRef}
              disabled={uploadedPhotos.length >= MAX_PHOTOS}
            />
            {uploadedPhotos.length < MAX_PHOTOS && (
              <div className="upload-prompt">
                <Camera className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <div className="upload-text">
                  <strong>Clique para adicionar fotos</strong><br />
                  <small>JPG, PNG até {MAX_FILE_SIZE_MB}MB cada | Máximo {MAX_PHOTOS} fotos</small>
                </div>
              </div>
            )}
            <div className="photo-preview-container">
              {uploadedPhotos.map((photo, index) => (
                <div key={index} className="photo-preview">
                  <img src={photo.url} alt={photo.name} loading="lazy" />
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={(e) => { e.stopPropagation(); removePhoto(index); }}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group flex items-center space-x-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <Label htmlFor="consent" className="font-normal">
            Concordo em compartilhar minhas fotos e comentários publicamente no site
          </Label>
        </div>

        <div className="form-actions">
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Publicar Review
          </Button>
          <Button type="button" variant="outline" onClick={resetForm}>
            Limpar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;