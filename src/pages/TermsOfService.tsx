import React from 'react';
import Layout from '@/components/Layout';

const TermsOfService = () => {
  const companyName = "mm importados";
  const companyCNPJ = "4430059901"; // Assuming this is a CNPJ or similar identifier

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-primary">Termos de Uso</h1>
        <p className="mb-4 text-lg">
          Bem-vindo ao Vem Viver Lumiar! Estes termos e condições descrevem as regras e regulamentos para o uso do site de {companyName}, localizado em <a href="/" className="text-blue-600 hover:underline">Vem Viver Lumiar</a>.
        </p>
        <p className="mb-4 text-lg">
          Ao acessar este site, presumimos que você aceita estes termos e condições. Não continue a usar Vem Viver Lumiar se você não concordar em aceitar todos os termos e condições declarados nesta página.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Licença</h2>
        <p className="mb-4 text-lg">
          Salvo indicação em contrário, {companyName} e/ou seus licenciadores detêm os direitos de propriedade intelectual para todo o material em Vem Viver Lumiar. Todos os direitos de propriedade intelectual são reservados. Você pode acessar isso de Vem Viver Lumiar para seu uso pessoal, sujeito às restrições definidas nestes termos e condições.
        </p>
        <p className="mb-4 text-lg">Você não deve:</p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Republicar material de Vem Viver Lumiar</li>
          <li>Vender, alugar ou sublicenciar material de Vem Viver Lumiar</li>
          <li>Reproduzir, duplicar ou copiar material de Vem Viver Lumiar</li>
          <li>Redistribuir conteúdo de Vem Viver Lumiar</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Comentários</h2>
        <p className="mb-4 text-lg">
          Partes deste site oferecem uma oportunidade para os usuários postarem e trocarem opiniões e informações em certas áreas do site. {companyName} não filtra, edita, publica ou revisa Comentários antes de sua presença no site. Os Comentários não refletem as opiniões e pontos de vista de {companyName}, seus agentes e/ou afiliados. Os Comentários refletem as opiniões e pontos de vista da pessoa que posta suas opiniões e pontos de vista. Na medida do permitido pelas leis aplicáveis, {companyName} não será responsável pelos Comentários ou por qualquer responsabilidade, danos ou despesas causados e/ou sofridos como resultado de qualquer uso e/ou postagem e/ou aparecimento dos Comentários neste site.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Informações da Empresa</h2>
        <p className="mb-2 text-lg">
          <strong>Nome da Empresa:</strong> {companyName}
        </p>
        <p className="mb-2 text-lg">
          <strong>Identificador:</strong> {companyCNPJ}
        </p>
        <p className="mb-4 text-lg">
          Estes termos são efetivos a partir de 20 de agosto de 2024.
        </p>
      </div>
    </Layout>
  );
};

export default TermsOfService;