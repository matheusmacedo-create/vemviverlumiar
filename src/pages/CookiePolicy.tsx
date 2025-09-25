import React from 'react';
import Layout from '@/components/Layout';

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md prose max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-primary">Política de Cookies</h1>
        <p className="mb-4 text-lg"><strong>Última atualização: 20 de agosto de 2024</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">O que são cookies</h2>
        <p className="mb-4 text-lg">
          Cookies são pequenos arquivos armazenados em seu dispositivo que nos ajudam a melhorar sua experiência.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Tipos de cookies que usamos</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Cookies essenciais:</h3>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Funcionamento básico da plataforma</li>
          <li>Manter você logado</li>
          <li>Preferências de idioma</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Cookies analíticos:</h3>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Google Analytics (anonimizados)</li>
          <li>Estatísticas de uso</li>
          <li>Melhoria de performance</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Cookies de personalização:</h3>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Lembrança de preferências</li>
          <li>Conteúdo personalizado</li>
          <li>Histórico de navegação</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Cookies de marketing:</h3>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Notificações relevantes</li>
          <li>Campanhas direcionadas</li>
          <li>Integração com redes sociais</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Gerenciar cookies</h2>
        <p className="mb-4 text-lg">Você pode:</p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Aceitar ou recusar via banner</li>
          <li>Configurar no seu navegador</li>
          <li>Usar o modo privado/incógnito</li>
          <li>Limpar cookies a qualquer momento</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Cookies de terceiros</h2>
        <p className="mb-4 text-lg">Utilizamos cookies de:</p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Google Analytics</li>
          <li>Google Maps</li>
          <li>Redes sociais (Facebook, Instagram)</li>
          <li>Sistemas de pagamento</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Mais informações</h2>
        <p className="mb-4 text-lg">
          Entre em contato: contato@vemviverlumiar.com
        </p>
      </div>
    </Layout>
  );
};

export default CookiePolicy;