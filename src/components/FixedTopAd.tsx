import React from 'react';
import AdSenseAd from './AdSenseAd';
import { cn } from '@/lib/utils';

interface FixedTopAdProps {
  slot: string;
  className?: string;
}

const FixedTopAd: React.FC<FixedTopAdProps> = ({ slot, className }) => {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 w-full bg-background shadow-md", className)} style={{ height: 'var(--fixed-ad-height)' }}>
      <AdSenseAd slot={slot} format="auto" style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default FixedTopAd;