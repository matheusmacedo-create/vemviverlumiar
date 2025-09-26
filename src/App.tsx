import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import LegalNotice from "./pages/LegalNotice";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import NatureAndAdventure from "./pages/NatureAndAdventure";
import LocalFlavors from "./pages/LocalFlavors";
import UniqueAccommodation from "./pages/UniqueAccommodation";
import CultureAndArt from "./pages/CultureAndArt";
import WellnessAndRelaxation from "./pages/WellnessAndRelaxation";
import LocalShopping from "./pages/LocalShopping";
import NatureAndAdventureContent from "./pages/NatureAndAdventureContent";
import CategoryArticleList from "./pages/CategoryArticleList";
import EncontroDosRios from "./pages/EncontroDosRios"; // Nova importação
import CachoeiraIndianaJones from "./pages/CachoeiraIndianaJones"; // Nova importação
import CachoeiraTocaDaOnca from "./pages/CachoeiraTocaDaOnca"; // Nova importação
import TrilhaPedraRiscada from "./pages/TrilhaPedraRiscada"; // Nova importação
import PocosDeLumiar from "./pages/PocosDeLumiar"; // Nova importação

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-uso" element={<TermsOfService />} />
          <Route path="/politica-de-cookies" element={<CookiePolicy />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/diretrizes-da-comunidade" element={<CommunityGuidelines />} />
          <Route path="/politica-de-cancelamento-e-reembolso" element={<CancellationRefundPolicy />} />
          {/* Rotas de listagem de categoria */}
          <Route path="/categorias/:categorySlug" element={<CategoryArticleList />} />
          {/* Rotas de categoria (páginas estáticas, se ainda forem necessárias) */}
          <Route path="/natureza-e-aventura" element={<NatureAndAdventure />} />
          <Route path="/sabores-locais" element={<LocalFlavors />} />
          <Route path="/hospedagem-unica" element={<UniqueAccommodation />} />
          <Route path="/cultura-e-arte" element={<CultureAndArt />} />
          <Route path="/bem-estar-e-relaxamento" element={<WellnessAndRelaxation />} />
          <Route path="/compras-locais" element={<LocalShopping />} />
          {/* Rotas de conteúdo detalhado */}
          <Route path="/natureza-e-aventura-guia" element={<NatureAndAdventureContent />} />
          <Route path="/encontro-dos-rios-lumiar-rio-macae-bonito" element={<EncontroDosRios />} />
          <Route path="/cachoeira-indiana-jones-lumiar-aventura-mata-atlantica" element={<CachoeiraIndianaJones />} />
          <Route path="/cachoeira-toca-da-onca-lumiar-paraiso-aquatico" element={<CachoeiraTocaDaOnca />} />
          <Route path="/trilha-pedra-riscada-lumiar-vista-panoramica" element={<TrilhaPedraRiscada />} />
          <Route path="/pocos-lumiar-banhos-naturais-guia-completo" element={<PocosDeLumiar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;