import React from 'react';
import Layout from '@/components/Layout';
import HeroCategory from '@/components/HeroCategory';
import CategoryLocationCard from '@/components/CategoryLocationCard';

const UniqueAccommodation: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <HeroCategory
          title="Hospedagem Única"
          subtitle="Durma onde a montanha abraça seus sonhos"
          imageSrc="/placeholder.svg"
          icon="🏡"
        />

        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Pousadas Charmosas</h2>
          <p className="text-lg text-gray-700 mb-8">Aconchego com personalidade</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Pousada Recanto da Montanha"
              description="Chalés rústicos com lareira e vista para a serra."
              metaInfo={[
                { label: 'Estilo', value: 'Rústico' },
                { label: 'Serviços', value: 'Café da manhã' },
              ]}
              href="#"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Casas de Temporada</h2>
          <p className="text-lg text-gray-700 mb-8">Sua casa na montanha</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryLocationCard
              image="/placeholder.svg"
              title="Casa da Cachoeira"
              description="Casa espaçosa com acesso privativo a uma pequena cachoeira."
              metaInfo={[
                { label: 'Capacidade', value: '6 pessoas' },
                { label: 'Cozinha', value: 'Completa' },
              ]}
              href="#"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UniqueAccommodation;