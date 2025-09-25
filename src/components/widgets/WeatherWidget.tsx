import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudSun, Droplet, Thermometer } from 'lucide-react';

const WeatherWidget: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Clima Hoje</CardTitle>
        <CloudSun className="h-5 w-5 text-yellow-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">25°C, Ensolarado</div>
        <p className="text-sm text-gray-500">Ideal para trilhas!</p>
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <Thermometer className="h-4 w-4 mr-1" /> Sensação: 27°C
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Droplet className="h-4 w-4 mr-1" /> Umidade: 70%
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;