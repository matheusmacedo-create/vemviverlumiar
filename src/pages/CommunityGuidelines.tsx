import Layout from '@/components/Layout';

const CommunityGuidelines = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md prose max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-primary">Diretrizes da Comunidade</h1>
        <p className="mb-4 text-lg"><strong>Última atualização: 20 de agosto de 2024</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Respeite a natureza</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Não deixe lixo</li>
          <li>Respeite trilhas demarcadas</li>
          <li>Não retire plantas ou pedras</li>
          <li>Mantenha distância da fauna</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Respeite a comunidade local</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Apoie negócios locais</li>
          <li>Seja respeitoso com moradores</li>
          <li>Mantenha níveis baixos de ruído</li>
          <li>Estacione nos locais adequados</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Respeite outros usuários</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Seja cordial nos comentários</li>
          <li>Compartilhe informações verdadeiras</li>
          <li>Respeite opiniões diferentes</li>
          <li>Ajude novos exploradores</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Compartilhamento responsável</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Não divulgue locais frágeis</li>
          <li>Evite super exposição de spots sensíveis</li>
          <li>Eduque sobre preservação</li>
          <li>Promova turismo consciente</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Consequências</h2>
        <p className="mb-4 text-lg">Violações podem resultar em:</p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Advertência</li>
          <li>Remoção de conteúdo</li>
          <li>Suspensão temporária</li>
          <li>Banimento permanente</li>
        </ul>
      </div>
    </Layout>
  );
};

export default CommunityGuidelines;