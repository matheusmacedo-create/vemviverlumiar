import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LocationCard from "@/components/LocationCard"; // Importando o novo componente
import Sidebar from "@/components/Sidebar"; // Importando o novo componente
import WeatherWidget from "@/components/widgets/WeatherWidget"; // Importando o widget de clima
import MostVisitedWidget from "@/components/widgets/MostVisitedWidget"; // Importando o widget de mais visitados
import NearYouWidget from "@/components/widgets/NearYouWidget"; // Importando o widget de perto de você
import EventsTodayWidget from "@/components/widgets/EventsTodayWidget"; // Importando o widget de eventos

const Index = () => {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white rounded-lg shadow-lg" style={{ backgroundImage: "url('/placeholder.svg')" }}>
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-center p-4">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">Viva Lumiar como um local</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Descubra cachoeiras secretas, prove sabores únicos e conecte-se com a essência da Serra Fluminense. Mais que um destino, uma experiência autêntica.</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg">
                Descobrir agora <ArrowRight className="ml-2 h-5 w-5" /> {/* CTA atualizado */}
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full shadow-lg">
                Baixar App
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Content Area */}
          <div className="space-y-12">
            {/* Seções Principais - Destaques da Semana */}
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

            {/* Seções de Conteúdo - Locais Imperdíveis */}
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
          </div>

          {/* Sidebar Area */}
          <Sidebar className="lg:sticky lg:top-4 h-fit">
            <WeatherWidget />
            <MostVisitedWidget />
            <NearYouWidget />
            <EventsTodayWidget />
          </Sidebar>
        </div>
      </div>
    </Layout>
  );
};

export default Index;