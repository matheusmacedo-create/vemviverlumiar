import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AdSenseAdProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'fluid' | 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({ slot, format = 'auto', className, style }) => {
  useEffect(() => {
    try {
      // Verifica se window.adsbygoogle existe antes de tentar empurrar
      if (window.adsbygoogle && process.env.NODE_ENV === 'production') { // Apenas em produção
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } else if (process.env.NODE_ENV !== 'production') {
        console.log(`AdSense Ad Placeholder: slot=${slot}, format=${format}`);
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [slot, format]);

  // Use um ID de editor de exemplo para desenvolvimento, mas instrua o usuário a substituí-lo
  const adClient = "ca-pub-YOUR_ADSENSE_PUBLISHER_ID"; 

  return (
    <div className={cn("my-8 text-center", className)} style={style}>
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%', height: '280px' }} // Estilo padrão, pode ser sobrescrito
           data-ad-client={adClient}
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdSenseAd;