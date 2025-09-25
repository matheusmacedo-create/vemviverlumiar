import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const NearYouWidget: React.FC = () => {
  const nearbyLocations = [
    { name: 'Trilha das Bromélias', distance: '1.2km', href: '#' },
    { name: 'Café da Montanha', distance: '0.5km', href: '#' },
    { name: 'Poço do Céu', distance: '2.8km', href: '#' },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Perto de Você</CardTitle>
        <MapPin className="h-5 w-5 text-blue-500" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-3">Baseado na sua localização atual.</p>
        <ul className="space-y-2">
          {nearbyLocations.map((location, index) => (
            <li key={index} className="flex items-center justify-between">
              <Link to={location.href} className="text-primary hover:underline text-base">
                {location.name}
              </Link>
              <span className="text-gray-600 text-sm">{location.distance}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default NearYouWidget;