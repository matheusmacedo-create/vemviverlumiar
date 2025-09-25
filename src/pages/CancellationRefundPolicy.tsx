import React from 'react';
import Layout from '@/components/Layout';

const CancellationRefundPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md prose max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-primary">Política de Cancelamento e Reembolso</h1>
        <p className="mb-4 text-lg"><strong>Última atualização: 20 de agosto de 2024</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Serviços gratuitos</h2>
        <p className="mb-4 text-lg">
          Você pode cancelar sua conta a qualquer momento sem custos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Serviços premium (quando disponíveis)</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Cancelamento:</h3>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Até 7 dias: reembolso integral</li>
          <li>Após 7 dias: proporcional ao uso</li>
          <li>Assinaturas: cancelamento para próximo ciclo</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Reembolso:</h3>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Processado em até 10 dias úteis</li>
          <li>Via mesmo método de pagamento</li>
          <li>Taxas bancárias por conta do solicitante</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Política de não-reembolso</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Serviços já consumidos integralmente</li>
          <li>Violação dos termos de uso</li>
          <li>Uso fraudulento da plataforma</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Como cancelar</h2>
        <ol className="list-decimal list-inside mb-4 pl-4 text-lg">
          <li>Acesse Configurações da Conta</li>
          <li>Clique em "Cancelar Serviço"</li>
          <li>Siga as instruções</li>
          <li>Ou entre em contato: <a href="mailto:contato@vemviverlumiar.com" className="text-blue-600 hover:underline">contato@vemviverlumiar.com</a></li>
        </ol>
      </div>
    </Layout>
  );
};

export default CancellationRefundPolicy;