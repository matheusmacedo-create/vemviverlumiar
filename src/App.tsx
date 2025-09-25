import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy"; // Nova importação
import LegalNotice from "./pages/LegalNotice"; // Nova importação
import AboutUs from "./pages/AboutUs"; // Nova importação
import Contact from "./pages/Contact"; // Nova importação
import FAQ from "./pages/FAQ"; // Nova importação
import CommunityGuidelines from "./pages/CommunityGuidelines"; // Nova importação
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy"; // Nova importação

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
          <Route path="/politica-de-cookies" element={<CookiePolicy />} /> {/* Nova rota */}
          <Route path="/aviso-legal" element={<LegalNotice />} /> {/* Nova rota */}
          <Route path="/sobre-nos" element={<AboutUs />} /> {/* Nova rota */}
          <Route path="/contato" element={<Contact />} /> {/* Nova rota */}
          <Route path="/faq" element={<FAQ />} /> {/* Nova rota */}
          <Route path="/diretrizes-da-comunidade" element={<CommunityGuidelines />} /> {/* Nova rota */}
          <Route path="/politica-de-cancelamento-e-reembolso" element={<CancellationRefundPolicy />} /> {/* Nova rota */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;