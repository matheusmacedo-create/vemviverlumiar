import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';

const Header = () => (
  <header className="bg-primary text-primary-foreground p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Vem Viver Lumiar</h1>
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