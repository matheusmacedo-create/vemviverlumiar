import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  const companyName = "Vem Viver Lumiar"; // Usando o nome da plataforma
  const companyCNPJ = "30.444.611/0001-90"; // CNPJ do documento

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md prose max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-primary">Política de Privacidade</h1>
        <p className="mb-4 text-lg"><strong>Última atualização: 20 de agosto de 2024</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Quem somos</h2>
        <p className="mb-4 text-lg">
          O <strong>{companyName}</strong> (CNPJ: {companyCNPJ}) é uma plataforma digital que conecta pessoas aos melhores locais e experiências em Lumiar, Nova Friburgo, RJ. Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Dados que coletamos</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Dados fornecidos voluntariamente:</h3>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Nome e e-mail (cadastro)</li>
          <li>Localização (quando autorizada)</li>
          <li>Preferências e avaliações</li>
          <li>Fotos e comentários compartilhados</li>
          <li>Histórico de locais visitados</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Dados coletados automaticamente:</h3>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Informações do dispositivo e navegador</li>
          <li>Endereço IP e dados de conexão</li>
          <li>Cookies e tecnologias similares</li>
          <li>Dados de uso da plataforma</li>
          <li>**Google AdSense**: Coletamos dados através do Google AdSense para exibir anúncios personalizados. O Google utiliza cookies para veicular anúncios com base nas visitas anteriores do usuário ao nosso website ou a outros websites.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Como usamos seus dados</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li><strong>Personalização</strong>: Sugerir locais baseados em suas preferências</li>
          <li><strong>Notificações</strong>: Enviar alertas relevantes sobre eventos e locais</li>
          <li><strong>Melhorias</strong>: Aprimorar nossa plataforma e funcionalidades</li>
          <li><strong>Comunicação</strong>: Responder dúvidas e fornecer suporte</li>
          <li><strong>Segurança</strong>: Proteger contra fraudes e uso inadequado</li>
          <li>**Publicidade**: Usamos os dados coletados pelo Google AdSense para exibir anúncios relevantes aos nossos usuários.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Compartilhamento de dados</h2>
        <p className="mb-4 text-lg">
          <strong>NÃO vendemos seus dados pessoais.</strong> Compartilhamos apenas quando:
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Você autoriza expressamente</li>
          <li>Necessário para prestação do serviço</li>
          <li>Exigido por lei ou autoridades</li>
          <li>Com parceiros de confiança (sempre anonimizados)</li>
          <li>**Google AdSense**: O Google, como fornecedor terceirizado, utiliza cookies para veicular anúncios em nosso site. O uso de cookies DART pelo Google permite a veiculação de anúncios para nossos usuários com base em suas visitas ao nosso site e a outros sites na Internet. Os usuários podem desativar o uso do cookie DART visitando a política de privacidade da rede de conteúdo e dos anúncios do Google.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Seus direitos (LGPD)</h2>
        <p className="mb-4 text-lg">Você pode:</p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li><strong>Acessar</strong> seus dados pessoais</li>
          <li><strong>Corrigir</strong> informações incorretas</li>
          <li><strong>Excluir</strong> sua conta e dados</li>
          <li><strong>Portar</strong> seus dados para outro serviço</li>
          <li><strong>Revogar</strong> consentimentos dados</li>
          <li><strong>Opor-se</strong> ao tratamento de dados</li>
          <li>**Gerenciar preferências de anúncios**: Você pode visitar as Configurações de anúncios para gerenciar os anúncios do Google que você vê e desativar a personalização de anúncios.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Retenção de dados</h2>
        <p className="mb-4 text-lg">Mantemos seus dados enquanto:</p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Sua conta estiver ativa</li>
          <li>Necessário para cumprimento legal</li>
          <li>Você não solicitar exclusão</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Segurança</h2>
        <p className="mb-4 text-lg">
          Utilizamos medidas técnicas e organizacionais para proteger seus dados:
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>Criptografia de dados sensíveis</li>
          <li>Acesso restrito e autenticado</li>
          <li>Monitoramento contínuo</li>
          <li>Backups seguros</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Contato para privacidade</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Encarregado de Dados (DPO)</h3>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li>E-mail: contato@vemviverlumiar.com</li>
          <li>Telefone: (48) 99803-2197</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Alterações nesta política</h2>
        <p className="mb-4 text-lg">
          Atualizaremos esta política conforme necessário. Mudanças significativas serão comunicadas por e-mail ou notificação na plataforma.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;