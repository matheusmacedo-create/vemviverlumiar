import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white rounded-lg shadow-lg" style={{ backgroundImage: "url('/placeholder.svg')" }}>
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-center p-4">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">Viva Lumiar como um local</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Plataforma que conecta pessoas aos melhores locais e experiências em Lumiar, com foco em conteúdo relevante e engajamento.</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg"> {/* Changed to bg-accent */}
                Descobrir Lumiar <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full shadow-lg">
                Baixar App
              </Button>
            </div>
          </div>
        </section>

        {/* Seções Principais - Destaques da Semana */}
        <section className="py-8">
          <h2 className="text-4xl font-bold text-center mb-8">Destaques da Semana</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <img src="/placeholder.svg" alt="Destaque 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <CardTitle>Trilha da Cachoeira Secreta</CardTitle>
                <CardDescription>Aventura e natureza exuberante.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">Ver Detalhes <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <img src="/placeholder.svg" alt="Destaque 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <CardTitle>Festival Gastronômico de Lumiar</CardTitle>
                <CardDescription>Sabores locais e chefs renomados.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">Ver Detalhes <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <img src="/placeholder.svg" alt="Destaque 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <CardTitle>Pousada Recanto da Montanha</CardTitle>
                <CardDescription>Conforto e tranquilidade.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">Ver Detalhes <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Seções de Conteúdo - Locais Imperdíveis (Exemplo) */}
        <section className="py-8 bg-muted rounded-lg p-6">
          <h2 className="text-4xl font-bold text-center mb-8">Locais Imperdíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Natureza & Aventura</CardTitle>
                <CardDescription>Trilhas, cachoeiras e atividades ao ar livre.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">Explorar Natureza <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Gastronomia Local</CardTitle>
                <CardDescription>Restaurantes típicos e produtores locais.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">Explorar Gastronomia <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;