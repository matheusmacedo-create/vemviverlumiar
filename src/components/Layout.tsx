import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Link } from 'react-router-dom'; // Importando Link para navegação

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
  <footer className="bg-secondary text-secondary-foreground p-4 text-center shadow-inner mt-8">
    <div className="container mx-auto">
      <div className="flex justify-center space-x-4 mb-2">
        <Link to="/politica-de-privacidade" className="hover:underline text-sm">Política de Privacidade</Link>
        <Link to="/termos-de-uso" className="hover:underline text-sm">Termos de Uso</Link>
      </div>
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