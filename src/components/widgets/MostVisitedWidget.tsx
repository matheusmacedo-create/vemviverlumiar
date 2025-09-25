import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MostVisitedWidget: React.FC = () => {
  const topLocations = [
    { name: 'Cachoeira do Véu', rating: 4.8, reviews: 124, href: '#' },
    { name: 'Restaurante Sabor da Serra', rating: 4.5, reviews: 89, href: '#' },
    { name: 'Mirante do Sol', rating: 4.9, reviews: 156, href: '#' },
    { name: 'Pousada Recanto Verde', rating: 4.3, reviews: 67, href: '#' },
    { name: 'Ateliê de Cerâmica', rating: 4.7, reviews: 43, href: '#' },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <Star key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />} {/* Representa meia estrela */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <Card className="popular-block">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Mais Visitados</CardTitle>
        <Flame className="h-5 w-5 text-orange-500" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {topLocations.map((location, index) => (
            <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-2 last:border-b-0 last:pb-0">
              <div className="flex-grow mb-1 sm:mb-0">
                <Link to={location.href} className="text-primary hover:underline text-base font-medium">
                  {location.name}
                </Link>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex mr-1">{renderStars(location.rating)}</div>
                <span className="font-semibold mr-1">{location.rating.toFixed(1)}</span>
                <span className="text-gray-500">({location.reviews})</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default MostVisitedWidget;