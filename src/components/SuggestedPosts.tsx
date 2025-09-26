import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
}

const dummyPosts: Post[] = [
  {
    id: '1',
    title: 'Roteiro de 3 Dias em Nova Friburgo: Cultura e Gastronomia',
    description: 'Explore o centro histórico, os melhores restaurantes e a vida noturna da cidade.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Cultura+e+Gastronomia',
    category: 'Cultura & Gastronomia',
    link: '#', // Link real em um app de verdade
  },
  {
    id: '2',
    title: 'Hospedagens Charmosas: Pousadas e Hotéis em Friburgo',
    description: 'Descubra as melhores opções de hospedagem para sua viagem, de luxo a econômicas.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Hospedagens',
    category: 'Hospedagem',
    link: '#',
  },
  {
    id: '3',
    title: 'Eventos e Festivais Anuais em Nova Friburgo',
    description: 'Fique por dentro da agenda cultural e dos principais eventos que acontecem na cidade.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Eventos',
    category: 'Eventos',
    link: '#',
  },
];

const SuggestedPosts: React.FC = () => {
  return (
    <section className="py-12 bg-article-card border-t border-article-border mt-8 rounded-lg p-6">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Próximos Posts Sugeridos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyPosts.map(post => (
          <div key={post.id} className="bg-background rounded-lg shadow-md overflow-hidden border border-border">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
              <span className="text-sm text-article-muted font-semibold mb-2 block">{post.category}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{post.title}</h3>
              <p className="text-article-muted text-sm mb-4 line-clamp-3">{post.description}</p>
              <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                Ler Mais <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuggestedPosts;