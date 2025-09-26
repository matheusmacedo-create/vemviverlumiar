import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroCategory from '@/components/HeroCategory';
import LocationCard from '@/components/LocationCard';
import { ArrowLeft } from 'lucide-react';

// Define uma interface para os objetos de post, espelhando LocationCardProps
interface ArticlePost {
  image: string;
  title: string;
  description: string;
  category: string;
  rating?: number;
  badges?: { type: 'novo' | 'popular' | 'imperdivel' | 'proximo' | 'evento' | 'gratuito'; text: string }[];
  href: string;
}

// Dados fictícios para simular artigos por categoria
const dummyArticles: {
  [key: string]: {
    hero: {
      title: string;
      subtitle: string;
      imageSrc: string;
      icon: string;
    };
    posts: ArticlePost[];
  };
} = {
  'natureza-e-aventura': {
    hero: {
      title: 'Natureza & Aventura',
      subtitle: 'Explore os guias e artigos mais recentes sobre a natureza exuberante de Lumiar.',
      imageSrc: '/placeholder.svg',
      icon: '🌿',
    },
    posts: [
      {
        image: '/placeholder.svg',
        title: 'Guia Completo: Natureza & Aventura em Nova Friburgo',
        description: 'Explore cachoeiras, trilhas e mirantes da Serra dos Órgãos com nosso guia detalhado.',
        category: 'Natureza & Aventura',
        rating: 4.9,
        badges: [{ type: 'imperdivel', text: 'Guia' }],
        href: '/natureza-e-aventura-guia',
      },
      {
        image: '/placeholder.svg',
        title: 'As 5 Melhores Trilhas para Iniciantes em Lumiar',
        description: 'Descubra caminhos leves e vistas deslumbrantes, perfeitos para toda a família.',
        category: 'Natureza & Aventura',
        rating: 4.7,
        badges: [{ type: 'novo', text: 'Novo' }],
        href: '#', // Placeholder for other articles
      },
      {
        image: '/placeholder.svg',
        title: 'Observação de Aves na Mata Atlântica de Lumiar',
        description: 'Um paraíso para os amantes da ornitologia, com espécies raras e endêmicas.',
        category: 'Natureza & Aventura',
        rating: 4.6,
        href: '#',
      },
    ],
  },
  'sabores-locais': {
    hero: {
      title: 'Sabores Locais',
      subtitle: 'Descubra os segredos gastronômicos de Lumiar, de restaurantes a produtores artesanais.',
      imageSrc: '/placeholder.svg',
      icon: '🍯',
    },
    posts: [
      {
        image: '/placeholder.svg',
        title: 'Roteiro Gastronômico: Onde Comer em Lumiar',
        description: 'Um tour pelos melhores restaurantes e bistrôs da região.',
        category: 'Sabores Locais',
        rating: 4.8,
        badges: [{ type: 'imperdivel', text: 'Roteiro' }],
        href: '#',
      },
      {
        image: '/placeholder.svg',
        title: 'Queijos Artesanais de Lumiar: Tradição e Sabor',
        description: 'Conheça os produtores locais e a arte de fazer queijo na serra.',
        category: 'Sabores Locais',
        rating: 4.9,
        href: '#',
      },
    ],
  },
  'hospedagem-unica': {
    hero: {
      title: 'Hospedagem Única',
      subtitle: 'Encontre o refúgio perfeito em Lumiar, de pousadas charmosas a casas de temporada.',
      imageSrc: '/placeholder.svg',
      icon: '🏡',
    },
    posts: [
      {
        image: '/placeholder.svg',
        title: 'As Pousadas Mais Charmosas de Lumiar',
        description: 'Opções de hospedagem com conforto, vista e atendimento impecável.',
        category: 'Hospedagem Única',
        rating: 4.7,
        badges: [{ type: 'imperdivel', text: 'Destaque' }],
        href: '#',
      },
    ],
  },
  'cultura-e-arte': {
    hero: {
      title: 'Cultura & Arte',
      subtitle: 'Imersão no cenário artístico e cultural de Lumiar, com ateliês e eventos.',
      imageSrc: '/placeholder.svg',
      icon: '🎨',
    },
    posts: [
      {
        image: '/placeholder.svg',
        title: 'Ateliês Abertos: Conheça os Artistas de Lumiar',
        description: 'Um passeio pelos espaços criativos que pulsam na serra.',
        category: 'Cultura & Arte',
        rating: 4.5,
        href: '#',
      },
    ],
  },
  'bem-estar-e-relaxamento': {
    hero: {
      title: 'Bem-estar & Relaxamento',
      subtitle: 'Reconecte-se com a natureza e encontre a paz interior em Lumiar.',
      imageSrc: '/placeholder.svg',
      icon: '🧘‍♀️',
    },
    posts: [
      {
        image: '/placeholder.svg',
        title: 'Spas e Terapias Naturais em Lumiar',
        description: 'Opções para cuidar do corpo e da mente em meio à tranquilidade da montanha.',
        category: 'Bem-estar & Relaxamento',
        rating: 4.8,
        href: '#',
      },
    ],
  },
  'compras-locais': {
    hero: {
      title: 'Compras Locais',
      subtitle: 'Leve um pedaço de Lumiar com você: artesanato, produtos orgânicos e mais.',
      imageSrc: '/placeholder.svg',
      icon: '🛍️',
    },
    posts: [
      {
        image: '/placeholder.svg',
        title: 'Feira de Produtores: Sabores e Artesanato da Serra',
        description: 'Descubra produtos frescos e peças únicas feitas por artesãos locais.',
        category: 'Compras Locais',
        rating: 4.6,
        href: '#',
      },
    ],
  },
};

const CategoryArticleList: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const categoryData = categorySlug ? dummyArticles[categorySlug] : undefined;

  if (!categoryData) {
    return (
      <Layout>
        <div className="container mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Categoria não encontrada!</h1>
          <p className="text-lg text-gray-700">A categoria "{categorySlug}" não possui artigos ou não existe.</p>
          <Link to="/" className="mt-6 inline-flex items-center text-blue-600 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-12">
        <HeroCategory
          title={categoryData.hero.title}
          subtitle={categoryData.hero.subtitle}
          imageSrc={categoryData.hero.imageSrc}
          icon={categoryData.hero.icon}
        />

        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Últimos Posts em {categoryData.hero.title}</h2>
          
          {categoryData.posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.posts.map((post, index) => (
                <LocationCard
                  key={index}
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  category={post.category}
                  rating={post.rating}
                  badges={post.badges}
                  href={post.href}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 text-lg">
              Nenhum post encontrado nesta categoria ainda.
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryArticleList;