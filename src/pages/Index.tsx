import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LocationCard from "@/components/LocationCard";
import Sidebar from "@/components/Sidebar";
import WeatherWidget from "@/components/widgets/WeatherWidget";
import MostVisitedWidget from "@/components/widgets/MostVisitedWidget";
import NearYouWidget from "@/components/widgets/NearYouWidget";
import EventsTodayWidget from "@/components/widgets/EventsTodayWidget";
import AdSenseAd from "@/components/AdSenseAd";
import { Link } from "react-router-dom"; // Importar Link

const Index = () => {
  return (
    <Layout>
      <div className="space-y-12 p-4 md:p-6">
        {/* Hero Section - Aprimorada */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('/placeholder.svg')" }}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Viva Lumiar como um local
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Descubra cachoeiras secretas, prove sabores únicos e conecte-se com a essência da Serra Fluminense. Mais que um destino, uma experiência autêntica.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg">
                    <Link to="/categorias/natureza-e-aventura">
                      <span className="flex items-center">Descobrir agora <ArrowRight className="ml-2 h-5 w-5" /></span>
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full shadow-lg">
                    <Link to="#"><span>Baixar App</span></Link> {/* Link para download do app */}
                  </Button>
                </div>
              </div>
              <img
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last hidden lg:block"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
            </div>
          </div>
        </section>

        {/* AdSense Ad after Hero Section */}
        <AdSenseAd slot="YOUR_AD_SLOT_ID_9" format="auto" style={{ height: '250px', maxWidth: '728px', margin: 'auto' }} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Content Area */}
          <div className="space-y-12">
            {/* Seção de Funcionalidades Essenciais - Nova */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary-foreground px-3 py-1 text-sm text-primary font-semibold dark:bg-gray-800">
                      Funcionalidades Essenciais
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Ferramentas poderosas para sua aventura em Lumiar</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Nossa plataforma oferece recursos intuitivos para você explorar, planejar e compartilhar suas experiências na Serra Fluminense.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                  <img
                    alt="Features Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    height="310"
                    src="/placeholder.svg"
                    width="550"
                  />
                  <div className="flex flex-col justify-center space-y-4">
                    <ul className="grid gap-6">
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold text-primary">Mapa Interativo</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Localize cachoeiras, restaurantes e pousadas com facilidade, com filtros por categoria e avaliações.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold text-primary">Roteiros Curados</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Descubra itinerários personalizados para cada tipo de viagem: romântico, família, aventura e mais.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold text-primary">Notificações Inteligentes</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Receba alertas relevantes sobre eventos especiais e dicas baseadas em sua localização.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Seções Principais - Destaques da Semana (Existente) */}
            <section className="py-8">
              <h2 className="text-4xl font-bold text-center mb-8">Destaques da Semana</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LocationCard
                  image="/placeholder.svg"
                  title="Trilha da Cachoeira Secreta"
                  description="Aventura e natureza exuberante."
                  category="Natureza & Aventura"
                  rating={4.8}
                  distance="2.3km"
                  time="1h trilha"
                  badges={[{ type: 'imperdivel', text: 'Imperdível' }]}
                  href="#"
                />
                <LocationCard
                  image="/placeholder.svg"
                  title="Festival Gastronômico de Lumiar"
                  description="Sabores locais e chefs renomados."
                  category="Sabores Locais"
                  rating={4.5}
                  badges={[{ type: 'evento', text: 'Evento Hoje' }]}
                  href="#"
                />
                <LocationCard
                  image="/placeholder.svg"
                  title="Pousada Recanto da Montanha"
                  description="Conforto e tranquilidade."
                  category="Hospedagem Única"
                  rating={4.9}
                  badges={[{ type: 'popular', text: 'Popular' }]}
                  href="#"
                />
              </div>
            </section>

            {/* AdSense Ad within content */}
            <AdSenseAd slot="YOUR_AD_SLOT_ID_2" format="rectangle" style={{ height: '300px', maxWidth: '728px', margin: 'auto' }} />

            {/* Seções de Conteúdo - Locais Imperdíveis (Existente) */}
            <section className="py-8 bg-muted rounded-lg p-6">
              <h2 className="text-4xl font-bold text-center mb-8">Locais Imperdíveis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LocationCard
                  image="/placeholder.svg"
                  title="Mirante do Sol Nascente"
                  description="O mundo visto de outro ângulo."
                  category="Natureza & Aventura"
                  rating={4.7}
                  distance="5km"
                  time="30min caminhada"
                  badges={[{ type: 'gratuito', text: 'Gratuito' }]}
                  href="#"
                />
                <LocationCard
                  image="/placeholder.svg"
                  title="Queijaria Artesanal da Vovó"
                  description="Do campo direto para sua mesa."
                  category="Sabores Locais"
                  rating={4.9}
                  badges={[{ type: 'novo', text: 'Novo' }]}
                  href="#"
                />
              </div>
            </section>

            {/* Seção de Chamada para Ação - Nova */}
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
                    Pronto para viver Lumiar de verdade?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Junte-se a milhares de exploradores que já estão descobrindo os segredos da Serra Fluminense com o Vem Viver Lumiar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg">
                    <Link to="#"><span>Baixar App Agora</span></Link> {/* Link para download do app */}
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-full shadow-lg">
                    <Link to="/categorias/natureza-e-aventura"><span>Explorar Locais</span></Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <Sidebar className="lg:sticky lg:top-4 h-fit">
            <WeatherWidget />
            <MostVisitedWidget />
            <NearYouWidget />
            <EventsTodayWidget />
            {/* AdSense Ad in Sidebar */}
            <AdSenseAd slot="YOUR_AD_SLOT_ID_3" format="vertical" style={{ height: '600px', maxWidth: '300px', margin: 'auto' }} />
          </Sidebar>
        </div>
      </div>
    </Layout>
  );
};

export default Index;