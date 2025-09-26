import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ReviewSection from './ReviewSection';
import ReviewForm from './ReviewForm';
import { Review } from './ReviewItem';
import { toast } from 'sonner';
import SuggestedPosts from './SuggestedPosts';
import Footer from './Footer';
import AdSenseAd from './AdSenseAd'; // Importa o componente de anúncio

interface ArticleLayoutProps {
  kicker: string;
  title: string;
  dek: string;
  children: React.ReactNode;
}

const initialReviews: Review[] = [
  {
    id: '1',
    reviewerName: 'Marina Santos',
    reviewerLocation: 'São Paulo, SP',
    visitDate: 'ago/2025',
    rating: 5,
    reviewTitle: 'Experiência incrível no Pico da Caledônia!',
    reviewText: 'A trilha até o Pico da Caledônia foi desafiadora mas muito recompensadora! A vista lá de cima é indescritível. Recomendo muito contratar um guia local - fez toda diferença na segurança e conhecimento sobre a região. Voltarei com certeza!',
    photos: [
      { src: "https://via.placeholder.com/120x90?text=Vista+do+Pico", alt: "Vista do Pico da Caledônia" },
      { src: "https://via.placeholder.com/120x90?text=Trilha", alt: "Trilha do Pico" },
      { src: "https://via.placeholder.com/120x90?text=Grupo", alt: "Grupo na trilha" },
    ],
    likes: 12,
    datePosted: 'há 2 semanas',
  },
  {
    id: '2',
    reviewerName: 'Carlos Oliveira',
    reviewerLocation: 'Belo Horizonte, MG',
    visitDate: 'jul/2025',
    rating: 4,
    reviewTitle: 'Cachoeiras maravilhosas para família',
    reviewText: 'Levei minha família para conhecer as cachoeiras e foi uma experiência muito boa! As crianças adoraram o Poço Paraíso. Só sugiro levar mais repelente porque os mosquitos estavam bem ativos. No geral, recomendo!',
    photos: [
      { src: "https://via.placeholder.com/120x90?text=Poço+Paraíso", alt: "Poço Paraíso" },
      { src: "https://via.placeholder.com/120x90?text=Família", alt: "Família na cachoeira" },
    ],
    likes: 8,
    datePosted: 'há 1 mês',
  },
  {
    id: '3',
    reviewerName: 'Ana Costa',
    reviewerLocation: 'Rio de Janeiro, RJ',
    visitDate: 'jun/2025',
    rating: 5,
    reviewTitle: 'Natureza preservada e energia renovada',
    reviewText: 'Como bióloga, fiquei impressionada com a diversidade da fauna e flora. Consegui avistar várias espécies de aves, incluindo o beija-flor-de-fronte-violeta! O trabalho de conservação da região está de parabéns. Um verdadeiro santuário ecológico.',
    photos: [],
    likes: 15,
    datePosted: 'há 2 meses',
  },
];

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ kicker, title, dek, children }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  const [tocLinks, setTocLinks] = useState<{ id: string; text: string; level: 'h2' | 'h3'; href: string }[]>([]);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

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

  useEffect(() => {
    if (articleRef.current) {
      const headings = Array.from(articleRef.current.querySelectorAll('h2, h3')) as (HTMLHeadingElement)[];
      const newTocLinks = headings.map(h => {
        const id = h.parentElement?.id || h.id || h.textContent?.trim().toLowerCase().replace(/\s+/g, '-') || '';
        if (!h.id) h.id = id;
        return {
          id,
          text: h.textContent?.replace('#', '').trim() || '',
          level: h.tagName.toLowerCase() as 'h2' | 'h3',
          href: `#${id}`,
        };
      });
      setTocLinks(newTocLinks);
    }
  }, [children]);

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
  }, [tocLinks]);

  const handleTocLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNewReviewSubmit = (formData: FormData) => {
    toast.loading('Publicando sua review...');
    setTimeout(() => {
      const newReview: Review = {
        id: (reviews.length + 1).toString(),
        reviewerName: formData.get('reviewerName') as string,
        reviewerLocation: formData.get('reviewerLocation') as string,
        visitDate: formData.get('visitDate') as string,
        rating: parseInt(formData.get('rating') as string),
        reviewTitle: formData.get('reviewTitle') as string,
        reviewText: formData.get('reviewText') as string,
        photos: Array.from(formData.getAll('photos[]')).map(file => ({
          src: URL.createObjectURL(file as File),
          alt: (file as File).name,
        })),
        likes: 0,
        datePosted: 'agora mesmo',
      };
      setReviews(prev => [newReview, ...prev]);
      toast.success('Review publicada com sucesso!');
    }, 1500);
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
        {/* AdSense Ad abaixo do cabeçalho do artigo, como solicitado inicialmente */}
        {/* <AdSenseAd slot="YOUR_AD_SLOT_ID_8" format="auto" style={{ height: '150px', maxWidth: '728px', margin: '1rem auto' }} /> */}
      </header>

      <div className="article-wrap">
        <main className="article-main">
          <article ref={articleRef} id="conteudo" className="article-content">
            {children}
            {/* AdSense Ad within article content */}
            <AdSenseAd slot="YOUR_AD_SLOT_ID_4" format="auto" style={{ height: '250px' }} />
            <hr className="article-hr" />
            <ReviewSection reviews={reviews} onOpenReviewForm={() => setIsReviewFormOpen(true)} />
            <SuggestedPosts />
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
            {/* AdSense Ad in Sidebar of Article */}
            <AdSenseAd slot="YOUR_AD_SLOT_ID_5" format="vertical" style={{ height: '600px', maxWidth: '300px', margin: 'auto', marginTop: '2rem' }} />
          </aside>
        </main>
      </div>
      
      <ReviewForm
        isOpen={isReviewFormOpen}
        onClose={() => setIsReviewFormOpen(false)}
        onSubmit={handleNewReviewSubmit}
      />
      <Footer />
    </div>
  );
};

export default ArticleLayout;