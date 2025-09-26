import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryNavigationProps {
  className?: string;
}

const categories = [
  { name: 'Natureza & Aventura', icon: '🌿', href: '/categorias/natureza-e-aventura' }, // Link atualizado
  { name: 'Sabores Locais', icon: '🍯', href: '/categorias/sabores-locais' },
  { name: 'Hospedagem Única', icon: '🏡', href: '/categorias/hospedagem-unica' },
  { name: 'Cultura & Arte', icon: '🎨', href: '/categorias/cultura-e-arte' },
  { name: 'Bem-estar & Relaxamento', icon: '🧘‍♀️', href: '/categorias/bem-estar-e-relaxamento' },
  { name: 'Compras Locais', icon: '🛍️', href: '/categorias/compras-locais' },
];

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ className }) => {
  return (
    <nav className={cn("bg-white shadow-sm py-3", className)}>
      <div className="container mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-lg">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.href}
            className="flex items-center gap-2 text-gray-700 hover:text-primary hover:underline transition-colors text-base md:text-lg font-medium"
          >
            <span className="text-xl">{category.icon}</span>
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNavigation;