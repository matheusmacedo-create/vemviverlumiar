import React from 'react';
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  const companyName = "mm importados";
  const companyCNPJ = "4430059901"; // Assuming this is a CNPJ or similar identifier

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-primary">Política de Privacidade</h1>
        <p className="mb-4 text-lg">
          A sua privacidade é importante para nós. É política da {companyName} respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="/" className="text-blue-600 hover:underline">Vem Viver Lumiar</a>, e outros sites que possuímos e operamos.
        </p>
        <p className="mb-4 text-lg">
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>
        <p className="mb-4 text-lg">
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>
        <p className="mb-4 text-lg">
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>
        <p className="mb-4 text-lg">
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>
        <p className="mb-4 text-lg">
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        </p>
        <p className="mb-4 text-lg">
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Informações da Empresa</h2>
        <p className="mb-2 text-lg">
          <strong>Nome da Empresa:</strong> {companyName}
        </p>
        <p className="mb-2 text-lg">
          <strong>Identificador:</strong> {companyCNPJ}
        </p>
        <p className="mb-4 text-lg">
          Esta política é efetiva a partir de 20 de agosto de 2024.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;