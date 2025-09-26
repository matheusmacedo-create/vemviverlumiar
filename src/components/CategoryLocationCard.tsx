import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface CategoryLocationCardProps {
  image: string;
  title: string;
  description: string;
  metaInfo: { label: string; value: string }[];
  href: string;
  className?: string;
}

const CategoryLocationCard: React.FC<CategoryLocationCardProps> = ({
  image,
  title,
  description,
  metaInfo,
  href,
  className,
}) => {
  return (
    <Card className={cn("hover:shadow-xl transition-shadow duration-300 flex flex-col", className)}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-700">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-1 text-sm text-gray-600 mb-4">
          {metaInfo.map((meta, index) => (
            <div key={index} className="flex justify-between">
              <span className="font-medium">{meta.label}:</span>
              <span>{meta.value}</span>
            </div>
          ))}
        </div>
        <Link to={href}>
          <Button variant="link" className="p-0 text-primary hover:text-primary/80">
            Ver Detalhes <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CategoryLocationCard;