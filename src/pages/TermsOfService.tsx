import React from 'react';
import Layout from '@/components/Layout';

const TermsOfService = () => {
  const companyName = "mm importados";
  const companyCNPJ = "4430059901"; 

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md prose max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-primary">Termos de Uso</h1>
        <p className="mb-4 text-lg"><strong>Última atualização: 20 de agosto de 2024</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Aceitação dos termos</h2>
        <p className="mb-4 text-lg">
          Ao usar o <strong>Vem Viver Lumiar</strong>, você concorda com estes termos. Se não concordar, não use nossos serviços.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Descrição do serviço</h2>
        <p className="mb-4 text-lg">
          Fornecemos uma plataforma para descobrir, avaliar e compartilhar informações sobre locais e experiências em Lumiar, Nova Friburgo, RJ.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Cadastro e conta</h2>
        <p className="mb-4 text-lg"><strong>Para criar uma conta você deve:</strong></p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Ter pelo menos 13 anos</li>
          <li>Fornecer informações verdadeiras</li>
          <li>Manter suas credenciais seguras</li>
          <li>Notificar sobre uso não autorizado</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Uso aceitável</h2>
        <p className="mb-4 text-lg"><strong>Você pode:</strong></p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Usar o serviço para fins pessoais</li>
          <li>Compartilhar fotos e avaliações próprias</li>
          <li>Interagir respeitosamente com a comunidade</li>
        </ul>
        <p className="mb-4 text-lg"><strong>Você NÃO pode:</strong></p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Publicar conteúdo ofensivo, falso ou ilegal</li>
          <li>Usar para fins comerciais sem autorização</li>
          <li>Interferir no funcionamento da plataforma</li>
          <li>Violar direitos de terceiros</li>
          <li>Criar múltiplas contas falsas</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Conteúdo do usuário</h2>
        <p className="mb-4 text-lg"><strong>Ao publicar conteúdo:</strong></p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Você mantém a propriedade</li>
          <li>Nos concede licença para uso na plataforma</li>
          <li>Garante que possui os direitos necessários</li>
          <li>Aceita que pode ser moderado ou removido</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Propriedade intelectual</h2>
        <p className="mb-4 text-lg">
          Todo conteúdo da plataforma (exceto do usuário) pertence ao <strong>Vem Viver Lumiar</strong> e está protegido por direitos autorais.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Limitação de responsabilidade</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Informações fornecidas por usuários e terceiros</li>
          <li>Disponibilidade ininterrupta do serviço</li>
          <li>Danos decorrentes do uso da plataforma</li>
          <li>Atividades realizadas com base em nossas informações</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Suspensão e encerramento</h2>
        <p className="mb-4 text-lg">
          Podemos suspender ou encerrar contas que violem estes termos, com ou sem aviso prévio.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Lei aplicável</h2>
        <p className="mb-4 text-lg">
          Estes termos são regidos pelas leis brasileiras, com foro na Comarca de Nova Friburgo, RJ.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Contato</h2>
        <p className="mb-4 text-lg">
          Dúvidas sobre estes termos: contato@vemviverlumiar.com
        </p>
      </div>
    </Layout>
  );
};

export default TermsOfService;