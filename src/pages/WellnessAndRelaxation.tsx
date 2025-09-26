import React from 'react';
import Layout from '@/components/Layout';
import HeroCategory from '@/components/HeroCategory';
import CategoryLocationCard from '@/components/CategoryLocationCard';

const WellnessAndRelaxation: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <HeroCategory
          title="Bem-estar & Relaxamento"
          subtitle="Reconecte-se com seu eu essencial"
          imageSrc="/placeholder.svg"
          icon="🧘‍♀️"
        />

        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Spas & Terapias</h2>
          <p className="text-lg text-gray-700 mb-8">Cura que vem da natureza</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Spa da Montanha"
              description="Massagens relaxantes e tratamentos com produtos naturais."
              metaInfo={[
                { label: 'Serviços', value: 'Massagens, Banhos' },
                { label: 'Terapias', value: 'Naturais' },
              ]}
              href="#"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Yoga & Meditação</h2>
          <p className="text-lg text-gray-700 mb-8">Encontre sua paz interior</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Espaço Zen Lumiar"
              description="Aulas de yoga e meditação em meio à natureza."
              metaInfo={[
                { label: 'Aulas', value: 'Diárias' },
                { label: 'Retiros', value: 'Mensais' },
              ]}
              href="#"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WellnessAndRelaxation;