"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export default function Home() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, responsivos y optimizados para SEO que impulsan tu presencia digital.",
      features: [
        "Sitios web responsivos y modernos",
        "Optimización SEO avanzada",
        "Integración con sistemas de pago",
        "Panel de administración personalizado",
        "Hosting y mantenimiento incluido"
      ],
      imageUrl: "https://placehold.co/400x300?text=Desarrollo+Web+Moderno+y+Responsivo",
      imageAlt: "Desarrollo web moderno y responsivo"
    },
    {
      title: "Aplicaciones Móviles",
      description: "Desarrollamos apps nativas e híbridas para iOS y Android con la mejor experiencia de usuario.",
      features: [
        "Apps nativas para iOS y Android",
        "Desarrollo híbrido con React Native",
        "Diseño UX/UI profesional",
        "Integración con APIs y servicios",
        "Publicación en App Store y Play Store"
      ],
      imageUrl: "https://placehold.co/400x300?text=Aplicaciones+Moviles+iOS+y+Android",
      imageAlt: "Desarrollo de aplicaciones móviles para iOS y Android"
    },
    {
      title: "Consultoría TI",
      description: "Asesoramos a tu empresa en la transformación digital y optimización de procesos tecnológicos.",
      features: [
        "Análisis de infraestructura tecnológica",
        "Estrategias de transformación digital",
        "Optimización de procesos empresariales",
        "Migración a la nube",
        "Capacitación técnica especializada"
      ],
      imageUrl: "https://placehold.co/400x300?text=Consultoria+TI+y+Transformacion+Digital",
      imageAlt: "Consultoría TI y transformación digital"
    },
    {
      title: "Sistemas Empresariales",
      description: "Desarrollamos software empresarial personalizado que se adapta perfectamente a tus necesidades.",
      features: [
        "ERP y CRM personalizados",
        "Sistemas de gestión empresarial",
        "Automatización de procesos",
        "Integración con sistemas existentes",
        "Soporte técnico especializado"
      ],
      imageUrl: "https://placehold.co/400x300?text=Sistemas+Empresariales+ERP+y+CRM",
      imageAlt: "Sistemas empresariales ERP y CRM personalizados"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://placehold.co/1920x1080?text=Empresa+Profesional+de+Desarrollo+de+Software";
    target.alt = "Imagen principal no disponible";
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/1920x1080?text=Equipo+Profesional+de+Desarrollo+de+Software+Trabajando+en+Oficina+Moderna"
            alt="Equipo profesional de desarrollo de software trabajando en oficina moderna"
            className="w-full h-full object-cover opacity-10"
            onError={handleHeroImageError}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transformamos Ideas en
            <span className="block text-black"> Soluciones Digitales</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Somos expertos en desarrollo de software, creando aplicaciones web y móviles 
            que impulsan el crecimiento de tu negocio con tecnología de vanguardia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('contacto')}
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg"
            >
              Iniciar Proyecto
            </Button>
            <Button
              onClick={() => scrollToSection('servicios')}
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              ¿Por qué elegir DevSoft?
            </h2>
            
            <p className="text-lg text-gray-600 mb-12">
              Con más de 5 años de experiencia en el mercado, hemos ayudado a cientos de empresas 
              a digitalizar sus procesos y alcanzar sus objetivos tecnológicos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  5+
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Años de Experiencia</h3>
                <p className="text-gray-600">
                  Experiencia comprobada en desarrollo de software empresarial
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  200+
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proyectos Completados</h3>
                <p className="text-gray-600">
                  Proyectos exitosos entregados a tiempo y dentro del presupuesto
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  24/7
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Soporte Técnico</h3>
                <p className="text-gray-600">
                  Soporte continuo para garantizar el funcionamiento óptimo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas completas adaptadas a las necesidades 
              específicas de tu empresa y sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                imageUrl={service.imageUrl}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conversemos sobre tu idea y cómo podemos ayudarte a convertirla en una 
              solución digital exitosa.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
