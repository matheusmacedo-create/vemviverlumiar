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
import NatureAndAdventure from "./pages/NatureAndAdventure"; // Nova importação
import LocalFlavors from "./pages/LocalFlavors"; // Nova importação
import UniqueAccommodation from "./pages/UniqueAccommodation"; // Nova importação
import CultureAndArt from "./pages/CultureAndArt"; // Nova importação
import WellnessAndRelaxation from "./pages/WellnessAndRelaxation"; // Nova importação
import LocalShopping from "./pages/LocalShopping"; // Nova importação

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
          {/* Novas rotas de categoria */}
          <Route path="/natureza-e-aventura" element={<NatureAndAdventure />} />
          <Route path="/sabores-locais" element={<LocalFlavors />} />
          <Route path="/hospedagem-unica" element={<UniqueAccommodation />} />
          <Route path="/cultura-e-arte" element={<CultureAndArt />} />
          <Route path="/bem-estar-e-relaxamento" element={<WellnessAndRelaxation />} />
          <Route path="/compras-locais" element={<LocalShopping />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;