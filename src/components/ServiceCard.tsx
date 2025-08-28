import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

export default function ServiceCard({ title, description, features, imageUrl, imageAlt }: ServiceCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://placehold.co/400x300?text=Servicio+de+Desarrollo+de+Software";
    target.alt = "Imagen de servicio no disponible";
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className="w-full bg-black text-white hover:bg-gray-800"
          onClick={() => {
            const contactSection = document.getElementById('contacto');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Más Información
        </Button>
      </CardContent>
    </Card>
  );
}
