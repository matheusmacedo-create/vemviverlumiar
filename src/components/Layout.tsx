import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import CategoryNavigation from './CategoryNavigation';
import AdSenseAd from './AdSenseAd'; // Certifique-se de que AdSenseAd está importado

const Header = () => (
  <header className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 shadow-lg">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold hover:opacity-80 transition-opacity">
        <img src="/logo.png" alt="Vem Viver Lumiar Logo" className="h-10 w-auto" />
      </Link>
      <nav className="flex-grow">
        <ul className="flex flex-wrap justify-center md:justify-end items-center gap-6 text-lg">
          <li><a href="#" className="hover:underline hover:text-gray-200 transition-colors">Locais</a></li>
          <li><a href="#" className="hover:underline hover:text-gray-200 transition-colors">Agenda</a></li>
          <li><a href="#" className="hover:underline hover:text-gray-200 transition-colors">Roteiros</a></li>
          <li><a href="#" className="hover:underline hover:text-gray-200 transition-colors">App</a></li>
        </ul>
      </nav>
      <Button variant="default" className="mt-4 md:mt-0 px-6 py-2 rounded-full shadow-md bg-white text-emerald-600 hover:bg-gray-100 transition-colors">
        Baixar App
      </Button>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-10 text-center shadow-inner mt-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
      {/* Coluna 1: Logo e Descrição */}
      <div className="flex flex-col items-center md:items-start">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
          <img src="/logo.png" alt="Vem Viver Lumiar Logo" className="h-10 w-auto" />
        </Link>
        <p className="text-sm leading-relaxed mb-4 text-emerald-100">
          Descubra a essência de Lumiar. Conectando você aos melhores locais e experiências autênticas na Serra Fluminense.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-emerald-100 hover:text-white transition-colors"><Facebook size={24} /></a>
          <a href="#" className="text-emerald-100 hover:text-white transition-colors"><Instagram size={24} /></a>
          <a href="#" className="text-emerald-100 hover:text-white transition-colors"><Youtube size={24} /></a>
        </div>
      </div>

      {/* Coluna 2: Institucional */}
      <div>
        <h3 className="font-bold text-lg text-white mb-4">Institucional</h3>
        <ul className="space-y-2">
          <li><Link to="/sobre-nos" className="hover:underline text-emerald-100 text-sm">Sobre Nós</Link></li>
          <li><Link to="/contato" className="hover:underline text-emerald-100 text-sm">Contato</Link></li>
          <li><Link to="/faq" className="hover:underline text-emerald-100 text-sm">FAQ</Link></li>
        </ul>
      </div>

      {/* Coluna 3: Legal */}
      <div>
        <h3 className="font-bold text-lg text-white mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><Link to="/termos-de-uso" className="hover:underline text-emerald-100 text-sm">Termos de Uso</Link></li>
          <li><Link to="/politica-de-privacidade" className="hover:underline text-emerald-100 text-sm">Política de Privacidade</Link></li>
          <li><Link to="/politica-de-cookies" className="hover:underline text-emerald-100 text-sm">Política de Cookies</Link></li>
          <li><Link to="/aviso-legal" className="hover:underline text-emerald-100 text-sm">Aviso Legal</Link></li>
        </ul>
      </div>

      {/* Coluna 4: Comunidade */}
      <div>
        <h3 className="font-bold text-lg text-white mb-4">Comunidade</h3>
        <ul className="space-y-2">
          <li><Link to="/diretrizes-da-comunidade" className="hover:underline text-emerald-100 text-sm">Diretrizes da Comunidade</Link></li>
          <li><a href="#" className="hover:underline text-emerald-100 text-sm">Central de Ajuda</a></li>
          <li><Link to="/politica-de-cancelamento-e-reembolso" className="hover:underline text-emerald-100 text-sm">Cancelamento e Reembolso</Link></li>
        </ul>
      </div>
    </div>
    <div className="mt-10 pt-6 border-t border-emerald-700 text-emerald-100 text-sm">
      <p>&copy; {new Date().getFullYear()} Vem Viver Lumiar. Todos os direitos reservados.</p>
      <MadeWithDyad />
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* REMOVIDO: FixedTopAd */}
      <Header />
      <CategoryNavigation />
      {/* NOVO: AdSense Ad global abaixo da navegação de categorias */}
      <AdSenseAd slot="YOUR_GLOBAL_LEADERBOARD_AD_SLOT_ID" format="auto" style={{ height: '100px', maxWidth: '970px', margin: '1rem auto' }} />
      <main className="flex-grow container mx-auto p-4 md:p-6"> {/* Padding-top revertido */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;