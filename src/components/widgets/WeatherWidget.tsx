import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplet, Thermometer, Sun } from 'lucide-react'; // 'CloudSun' removido

const WeatherWidget: React.FC = () => {
  return (
    <Card className="weather-block">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Clima Hoje</CardTitle>
        <Sun className="h-5 w-5 text-yellow-500" /> {/* Ícone de sol */}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-1">25°C</div>
        <div className="text-lg text-gray-700 mb-2">Ensolarado</div>
        <p className="text-sm text-gray-500 mb-4">Ideal para trilhas!</p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Thermometer className="h-4 w-4 mr-1 text-red-500" /> Sensação: 27°C
          </div>
          <div className="flex items-center">
            <Droplet className="h-4 w-4 mr-1 text-blue-500" /> Umidade: 70%
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;