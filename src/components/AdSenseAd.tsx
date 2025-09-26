import React from 'react';
import { cn } from '@/lib/utils';

interface AdSenseAdProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'fluid' | 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({ slot, format = 'auto', className, style }) => {
  // Em ambiente de desenvolvimento, exibimos um banner temporário.
  // Em produção, o script do AdSense seria ativado.
  // Para ativar o AdSense em produção, você precisaria reverter este arquivo
  // para a versão anterior e garantir que o script do AdSense esteja no index.html.

  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0', // Cor de fundo cinza claro para o banner
    color: '#333',
    border: '1px dashed #999',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    minHeight: '100px', // Altura mínima para visibilidade
    width: '100%',
    height: '280px', // Altura padrão, pode ser sobrescrita
    ...style, // Permite que estilos passados sobrescrevam os padrões
  };

  return (
    <div className={cn("my-8", className)} style={defaultStyle}>
      <div className="p-4">
        <p>Banner de Anúncio</p>
        <p className="text-sm font-normal text-gray-600">Slot: {slot}</p>
        <p className="text-xs font-normal text-gray-500">Formato: {format}</p>
      </div>
    </div>
  );
};

export default AdSenseAd;