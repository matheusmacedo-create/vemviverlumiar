import Layout from '@/components/Layout';

const LegalNotice = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md prose max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-primary">Aviso Legal</h1>
        <p className="mb-4 text-lg"><strong>Última atualização: 20 de agosto de 2024</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Natureza das informações</h2>
        <p className="mb-4 text-lg">
          As informações no <strong>Vem Viver Lumiar</strong> são fornecidas para fins informativos. Sempre verifique condições atuais antes de visitar locais.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Responsabilidade do usuário</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Verificar informações antes de agir</li>
          <li>Respeitar propriedade privada</li>
          <li>Seguir regras ambientais</li>
          <li>Usar equipamentos adequados</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Limitações</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Não garantimos exatidão total</li>
          <li>Informações podem estar desatualizadas</li>
          <li>Condições podem mudar sem aviso</li>
          <li>Riscos são de responsabilidade do usuário</li>
        </ul>
      </div>
    </Layout>
  );
};

export default LegalNotice;