import React from 'react';
import Layout from '@/components/Layout';
import HeroCategory from '@/components/HeroCategory';
import CategoryLocationCard from '@/components/CategoryLocationCard';

const NatureAndAdventure: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <HeroCategory
          title="Natureza & Aventura"
          subtitle="Onde a montanha encontra sua alma aventureira"
          imageSrc="/placeholder.svg"
          icon="🌿"
        />

        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Cachoeiras & Poços</h2>
          <p className="text-lg text-gray-700 mb-8">Águas cristalinas que renovam a energia</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Cachoeira do Véu"
              description="Uma das mais famosas, com fácil acesso e poço para banho."
              metaInfo={[
                { label: 'Dificuldade', value: 'Fácil' },
                { label: 'Tempo de trilha', value: '30min' },
              ]}
              href="#"
            />
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Poço do Céu"
              description="Águas azuis e cristalinas, ideal para um mergulho refrescante."
              metaInfo={[
                { label: 'Dificuldade', value: 'Moderada' },
                { label: 'Tempo de trilha', value: '1h' },
              ]}
              href="#"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Trilhas & Caminhadas</h2>
          <p className="text-lg text-gray-700 mb-8">Cada passo, uma descoberta</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Trilha das Bromélias"
              description="Caminhada leve com vistas panorâmicas e flora exuberante."
              metaInfo={[
                { label: 'Nível', value: 'Contemplativa' },
                { label: 'Distância', value: '3km' },
              ]}
              href="#"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NatureAndAdventure;