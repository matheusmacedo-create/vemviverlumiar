import React from 'react';
import Layout from '@/components/Layout';
import HeroCategory from '@/components/HeroCategory';
import CategoryLocationCard from '@/components/CategoryLocationCard';

const LocalFlavors: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <HeroCategory
          title="Sabores Locais"
          subtitle="Prove a alma de Lumiar em cada garfada"
          imageSrc="/placeholder.svg"
          icon="🍯"
        />

        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Restaurantes Tradicionais</h2>
          <p className="text-lg text-gray-700 mb-8">Onde as receitas de família ganham vida</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Restaurante Sabor da Serra"
              description="Culinária mineira com toque local e ambiente acolhedor."
              metaInfo={[
                { label: 'Culinária', value: 'Mineira' },
                { label: 'Faixa de preço', value: '$$' },
              ]}
              href="#"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Produtores Artesanais</h2>
          <p className="text-lg text-gray-700 mb-8">Do campo direto para sua mesa</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Queijaria Artesanal da Vovó"
              description="Queijos frescos e curados, feitos com tradição."
              metaInfo={[
                { label: 'Produto', value: 'Queijos' },
                { label: 'Visitação', value: 'Sim' },
              ]}
              href="#"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocalFlavors;