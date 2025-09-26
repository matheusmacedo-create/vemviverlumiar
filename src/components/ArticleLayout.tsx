import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ReviewSection from './ReviewSection'; // Importando o novo componente

interface ArticleLayoutProps {
  kicker: string;
  title: string;
  dek: string;
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ kicker, title, dek, children }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  const [tocLinks, setTocLinks] = useState<{ id: string; text: string; level: 'h2' | 'h3'; href: string }[]>([]);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      if (progressRef.current) {
        const h = document.documentElement;
        const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
        progressRef.current.style.width = Math.max(0, Math.min(100, scrolled)) + "%";
      }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  // Generate TOC
  useEffect(() => {
    if (articleRef.current) {
      const headings = Array.from(articleRef.current.querySelectorAll('h2, h3')) as (HTMLHeadingElement)[];
      const newTocLinks = headings.map(h => {
        const id = h.parentElement?.id || h.id || h.textContent?.trim().toLowerCase().replace(/\s+/g, '-') || '';
        if (!h.id) h.id = id; // Ensure headings have an ID for linking
        return {
          id,
          text: h.textContent?.replace('#', '').trim() || '',
          level: h.tagName.toLowerCase() as 'h2' | 'h3',
          href: `#${id}`,
        };
      });
      setTocLinks(newTocLinks);
    }
  }, [children]); // Re-generate if children change

  // Highlight active TOC link
  useEffect(() => {
    const opts = { rootMargin: "0px 0px -70% 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = tocRef.current?.querySelector(`a[href="#${id}"]`);
        if (link) {
          if (entry.isIntersecting) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }, opts);

    if (articleRef.current) {
      articleRef.current.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    }

    return () => observer.disconnect();
  }, [tocLinks]); // Re-observe if TOC links change

  const handleTocLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="article-body">
      <div ref={progressRef} className="progress"></div>

      <header className="article-header">
        <div className="article-wrap">
          <div className="article-title-group">
            <span className="article-kicker">{kicker}</span>
            <h1 className="article-h1">{title}</h1>
          </div>
          <p className="article-dek">{dek}</p>
        </div>
      </header>

      <div className="article-wrap">
        <main className="article-main">
          <article ref={articleRef} id="conteudo" className="article-content">
            {children}
            <hr className="article-hr" />
            <ReviewSection /> {/* Adicionando a seção de reviews aqui */}
          </article>

          <aside aria-label="Sumário" className="article-aside">
            <nav ref={tocRef} className="article-toc">
              <h2>📋 Sumário</h2>
              <div>
                {tocLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={handleTocLinkClick}
                    className={cn(
                      link.level === 'h3' ? 'pl-5' : 'pl-1',
                      'block py-1 px-2 my-0.5 text-article-muted no-underline rounded-md hover:text-article-text hover:bg-[rgba(46,139,87,.09)] transition-colors duration-200'
                    )}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </nav>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default ArticleLayout;