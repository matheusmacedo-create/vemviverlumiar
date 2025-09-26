import React from 'react';
import Layout from '@/components/Layout';
import HeroCategory from '@/components/HeroCategory';
import CategoryLocationCard from '@/components/CategoryLocationCard';

const CultureAndArt: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <HeroCategory
          title="Cultura & Arte"
          subtitle="A criatividade floresce na montanha"
          imageSrc="/placeholder.svg"
          icon="🎨"
        />

        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Ateliês & Galerias</h2>
          <p className="text-lg text-gray-700 mb-8">Arte nascida da inspiração serrana</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Ateliê do Artesão"
              description="Obras em madeira e cerâmica, com workshops eventuais."
              metaInfo={[
                { label: 'Visitação', value: 'Aberta' },
                { label: 'Workshops', value: 'Sim' },
              ]}
              href="#"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Música & Eventos</h2>
          <p className="text-lg text-gray-700 mb-8">Ritmos que ecoam pelas montanhas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Quintal da Serra"
              description="Espaço cultural com shows ao vivo e gastronomia."
              metaInfo={[
                { label: 'Gênero', value: 'Variado' },
                { label: 'Eventos', value: 'Finais de semana' },
              ]}
              href="#"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CultureAndArt;