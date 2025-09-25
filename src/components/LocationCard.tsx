import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LocationCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  rating?: number;
  distance?: string;
  time?: string;
  badges?: { type: 'novo' | 'popular' | 'imperdivel' | 'proximo' | 'evento' | 'gratuito'; text: string }[];
  href: string;
  className?: string;
}

const badgeColors = {
  novo: 'bg-accent text-white',
  popular: 'bg-secondary text-white',
  imperdivel: 'bg-primary text-white',
  proximo: 'bg-blue-500 text-white',
  evento: 'bg-purple-500 text-white',
  gratuito: 'bg-green-500 text-white',
};

const LocationCard: React.FC<LocationCardProps> = ({
  image,
  title,
  description,
  category,
  rating,
  distance,
  time,
  badges,
  href,
  className,
}) => {
  return (
    <Card className={cn("hover:shadow-xl transition-shadow duration-300 flex flex-col", className)}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <CardHeader className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-600">{category}</span>
          <div className="flex gap-1">
            {badges?.map((badge, index) => (
              <span key={index} className={cn("px-2 py-1 rounded-md text-xs font-medium", badgeColors[badge.type])}>
                {badge.text}
              </span>
            ))}
          </div>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-700">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
          {rating && (
            <span className="flex items-center">
              <span className="mr-1">⭐</span> {rating.toFixed(1)}
            </span>
          )}
          {distance && (
            <span className="flex items-center">
              <span className="mr-1">📍</span> {distance}
            </span>
          )}
          {time && (
            <span className="flex items-center">
              <span className="mr-1">⏱️</span> {time}
            </span>
          )}
        </div>
        <Button variant="link" className="p-0 text-primary hover:text-primary/80">
          Ver Detalhes <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default LocationCard;