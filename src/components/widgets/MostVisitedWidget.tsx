import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const MostVisitedWidget: React.FC = () => {
  const topLocations = [
    { name: 'Cachoeira do Véu', href: '#' },
    { name: 'Restaurante Sabor da Serra', href: '#' },
    { name: 'Mirante do Sol', href: '#' },
    { name: 'Pousada Recanto Verde', href: '#' },
    { name: 'Ateliê de Cerâmica', href: '#' },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Mais Visitados</CardTitle>
        <Flame className="h-5 w-5 text-orange-500" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {topLocations.map((location, index) => (
            <li key={index} className="flex items-center">
              <span className="text-gray-500 mr-2">{index + 1}.</span>
              <Link to={location.href} className="text-primary hover:underline text-base">
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default MostVisitedWidget;