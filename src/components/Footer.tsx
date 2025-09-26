import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-article-bg border-t border-article-border py-8 mt-12">
      <div className="article-wrap flex flex-col md:flex-row justify-between items-center text-article-muted text-sm">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Descubra Nova Friburgo. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para amantes da natureza.</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-article-muted hover:text-primary transition-colors duration-200" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-article-muted hover:text-primary transition-colors duration-200" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-article-muted hover:text-primary transition-colors duration-200" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
        <div className="text-center md:text-right">
          <a href="#" className="text-article-muted hover:text-primary transition-colors duration-200 mr-4">Política de Privacidade</a>
          <a href="#" className="text-article-muted hover:text-primary transition-colors duration-200">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;