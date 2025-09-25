import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Footprints, Coffee, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const NearYouWidget: React.FC = () => {
  const nearbyLocations = [
    { name: 'Trilha das Bromélias', type: 'Caminhada • Fácil', distance: '1.2km', icon: <Footprints className="h-5 w-5 text-green-600" />, href: '#' },
    { name: 'Café da Montanha', type: 'Alimentação • Local', distance: '0.5km', icon: <Coffee className="h-5 w-5 text-amber-700" />, href: '#' },
    { name: 'Poço do Céu', type: 'Natação • Moderado', distance: '2.8km', icon: <Waves className="h-5 w-5 text-blue-600" />, href: '#' },
  ];

  return (
    <Card className="nearby-block">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Perto de Você</CardTitle>
        <MapPin className="h-5 w-5 text-blue-500" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-3">Baseado na sua localização atual.</p>
        <ul className="space-y-3">
          {nearbyLocations.map((location, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full">{location.icon}</div>
                <div>
                  <Link to={location.href} className="text-primary hover:underline text-base font-medium">
                    {location.name}
                  </Link>
                  <p className="text-xs text-gray-500">{location.type}</p>
                </div>
              </div>
              <span className="text-gray-600 text-sm font-medium">{location.distance}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default NearYouWidget;