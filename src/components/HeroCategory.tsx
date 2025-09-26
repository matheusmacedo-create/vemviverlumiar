import React from 'react';
import { cn } from '@/lib/utils';

interface HeroCategoryProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  icon: string;
  className?: string;
}

const HeroCategory: React.FC<HeroCategoryProps> = ({
  title,
  subtitle,
  imageSrc,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative h-[40vh] bg-cover bg-center flex items-center justify-center text-white rounded-lg shadow-lg overflow-hidden",
        className
      )}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight">
          {icon} {title}
        </h1>
        <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroCategory;