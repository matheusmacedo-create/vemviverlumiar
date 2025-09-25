import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Importando Button do shadcn/ui
import { MountainIcon, Facebook, Instagram, Youtube } from 'lucide-react'; // Importando ícones

const Header = () => (
  <header className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground p-4 shadow-lg">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold hover:opacity-80 transition-opacity">
        <MountainIcon className="h-8 w-8" />
        <span>Vem Viver Lumiar</span>
      </Link>
      <nav className="flex-grow">
        <ul className="flex flex-wrap justify-center md:justify-end items-center gap-6 text-lg">
          <li><a href="#" className="hover:underline hover:text-accent transition-colors">Locais</a></li>
          <li><a href="#" className="hover:underline hover:text-accent transition-colors">Agenda</a></li>
          <li><a href="#" className="hover:underline hover:text-accent transition-colors">Roteiros</a></li>
          <li><a href="#" className="hover:underline hover:text-accent transition-colors">App</a></li>
        </ul>
      </nav>
      <Button variant="secondary" className="mt-4 md:mt-0 px-6 py-2 rounded-full shadow-md hover:bg-secondary/90 transition-colors">
        Baixar App
      </Button>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 p-10 text-center shadow-inner mt-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
      {/* Coluna 1: Logo e Descrição */}
      <div className="flex flex-col items-center md:items-start">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
          <MountainIcon className="h-8 w-8" />
          <span>Vem Viver Lumiar</span>
        </Link>
        <p className="text-sm leading-relaxed mb-4">
          Descubra a essência de Lumiar. Conectando você aos melhores locais e experiências autênticas na Serra Fluminense.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={24} /></a>
        </div>
      </div>

      {/* Coluna 2: Institucional */}
      <div>
        <h3 className="font-bold text-lg text-white mb-4">Institucional</h3>
        <ul className="space-y-2">
          <li><Link to="/sobre-nos" className="hover:underline text-sm">Sobre Nós</Link></li>
          <li><Link to="/contato" className="hover:underline text-sm">Contato</Link></li>
          <li><Link to="/faq" className="hover:underline text-sm">FAQ</Link></li>
        </ul>
      </div>

      {/* Coluna 3: Legal */}
      <div>
        <h3 className="font-bold text-lg text-white mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><Link to="/termos-de-uso" className="hover:underline text-sm">Termos de Uso</Link></li>
          <li><Link to="/politica-de-privacidade" className="hover:underline text-sm">Política de Privacidade</Link></li>
          <li><Link to="/politica-de-cookies" className="hover:underline text-sm">Política de Cookies</Link></li>
          <li><Link to="/aviso-legal" className="hover:underline text-sm">Aviso Legal</Link></li>
        </ul>
      </div>

      {/* Coluna 4: Comunidade */}
      <div>
        <h3 className="font-bold text-lg text-white mb-4">Comunidade</h3>
        <ul className="space-y-2">
          <li><Link to="/diretrizes-da-comunidade" className="hover:underline text-sm">Diretrizes da Comunidade</Link></li>
          <li><a href="#" className="hover:underline text-sm">Central de Ajuda</a></li>
          <li><Link to="/politica-de-cancelamento-e-reembolso" className="hover:underline text-sm">Cancelamento e Reembolso</Link></li>
        </ul>
      </div>
    </div>
    <div className="mt-10 pt-6 border-t border-gray-700 text-gray-500 text-sm">
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
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;