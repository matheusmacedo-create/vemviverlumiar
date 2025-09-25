import Layout from '@/components/Layout';

const AboutUs = () => {
  const companyName = "Vem Viver Lumiar"; // Usando o nome da plataforma
  const companyCNPJ = "30.444.611/0001-90"; // CNPJ do documento
  const responsible = "Matheus Macedo";
  const contactEmail = "contato@vemviverlumiar.com";
  const contactPhone = "(48) 99803-2197";
  const socialMedia = "@vemviverlumiar";

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md prose max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-primary">Sobre Nós</h1>
        <p className="mb-4 text-lg"><strong>Última atualização: 20 de agosto de 2024</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Nossa missão</h2>
        <p className="mb-4 text-lg">
          Conectar pessoas à essência autêntica de Lumiar, promovendo turismo consciente e sustentável que valorize a comunidade local.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Nossa visão</h2>
        <p className="mb-4 text-lg">
          Ser a principal referência para quem quer viver experiências genuínas em Lumiar, preservando sua natureza e cultura.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Nossos valores</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li><strong>Autenticidade</strong>: Priorizamos experiências genuínas</li>
          <li><strong>Sustentabilidade</strong>: Respeitamos o meio ambiente</li>
          <li><strong>Comunidade</strong>: Valorizamos produtores e moradores locais</li>
          <li><strong>Qualidade</strong>: Curamos apenas o melhor de Lumiar</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Nossa história</h2>
        <p className="mb-4 text-lg">
          O <strong>{companyName}</strong> (CNPJ: {companyCNPJ}) nasceu da paixão de <strong>{responsible}</strong> pela Serra Fluminense e do desejo de compartilhar as experiências autênticas que só quem conhece a região de verdade pode oferecer. Criamos esta plataforma para conectar pessoas aos locais especiais de Lumiar, promovendo um turismo consciente e sustentável.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Contato</h2>
        <ul className="list-disc list-inside mb-4 pl-4 text-lg">
          <li><strong>E-mail</strong>: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a></li>
          <li><strong>Telefone</strong>: {contactPhone}</li>
          <li><strong>Responsável</strong>: {responsible}</li>
          <li><strong>Redes sociais</strong>: {socialMedia}</li>
        </ul>
      </div>
    </Layout>
  );
};

export default AboutUs;