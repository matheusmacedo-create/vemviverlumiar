import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-secondary text-secondary-foreground p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <img src="/logo.png" alt="Vem Viver Lumiar Logo" className="h-12" />
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Locais</a></li>
          <li><a href="#" className="hover:underline">Agenda</a></li>
          <li><a href="#" className="hover:underline">Roteiros</a></li>
          <li><a href="#" className="hover:underline">App</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground p-8 text-center shadow-inner mt-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div>
        <h3 className="font-bold text-lg mb-4">Institucional</h3>
        <ul className="space-y-2">
          <li><Link to="/sobre-nos" className="hover:underline text-sm">Sobre Nós</Link></li>
          <li><Link to="/contato" className="hover:underline text-sm">Contato</Link></li>
          <li><Link to="/faq" className="hover:underline text-sm">FAQ</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><Link to="/termos-de-uso" className="hover:underline text-sm">Termos de Uso</Link></li>
          <li><Link to="/politica-de-privacidade" className="hover:underline text-sm">Política de Privacidade</Link></li>
          <li><Link to="/politica-de-cookies" className="hover:underline text-sm">Política de Cookies</Link></li>
          <li><Link to="/aviso-legal" className="hover:underline text-sm">Aviso Legal</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Comunidade</h3>
        <ul className="space-y-2">
          <li><Link to="/diretrizes-da-comunidade" className="hover:underline text-sm">Diretrizes da Comunidade</Link></li>
          <li><a href="#" className="hover:underline text-sm">Central de Ajuda</a></li> {/* Placeholder for now */}
          <li><Link to="/politica-de-cancelamento-e-reembolso" className="hover:underline text-sm">Cancelamento e Reembolso</Link></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 pt-4 border-t border-secondary-foreground/20">
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;