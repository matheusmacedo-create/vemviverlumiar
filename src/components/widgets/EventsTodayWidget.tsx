import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsTodayWidget: React.FC = () => {
  const events = [
    { name: 'Show de Forró no Quintal', time: '20:00', href: '#' },
    { name: 'Feira de Artesanato Local', time: '10:00 - 17:00', href: '#' },
  ];

  return (
    <Card className="events-block">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Eventos Hoje</CardTitle>
        <CalendarDays className="h-5 w-5 text-purple-500" />
      </CardHeader>
      <CardContent>
        {events.length > 0 ? (
          <ul className="space-y-3">
            {events.map((event, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-2 last:border-b-0 last:pb-0">
                <Link to={event.href} className="text-primary hover:underline text-base font-medium">
                  {event.name}
                </Link>
                <span className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-1 text-gray-500" /> {event.time}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">Nenhum evento programado para hoje.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default EventsTodayWidget;