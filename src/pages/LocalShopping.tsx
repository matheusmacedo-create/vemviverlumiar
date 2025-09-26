import React from 'react';
import Layout from '@/components/Layout';
import HeroCategory from '@/components/HeroCategory';
import CategoryLocationCard from '@/components/CategoryLocationCard';

const LocalShopping: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <HeroCategory
          title="Compras Locais"
          subtitle="Leve um pedaço de Lumiar com você"
          imageSrc="/placeholder.svg"
          icon="🛍️"
        />

        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Feira de Produtores</h2>
          <p className="text-lg text-gray-700 mb-8">O melhor da terra em suas mãos</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Feira Orgânica de Lumiar"
              description="Produtos frescos, orgânicos e artesanais da região."
              metaInfo={[
                { label: 'Horário', value: 'Sábados, 8h-13h' },
                { label: 'Produtos', value: 'Frutas, Legumes, Artesanato' },
              ]}
              href="#"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Lojas de Decoração</h2>
          <p className="text-lg text-gray-700 mb-8">Estilo serrano para sua casa</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Casa & Serra Decorações"
              description="Móveis rústicos, objetos de arte e plantas para seu lar."
              metaInfo={[
                { label: 'Estilo', value: 'Rústico, Moderno' },
                { label: 'Produtos', value: 'Móveis, Decoração' },
              ]}
              href="#"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocalShopping;