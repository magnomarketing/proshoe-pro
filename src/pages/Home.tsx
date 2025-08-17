import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Truck, CheckCircle, Calendar, Zap, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-manufacturing.jpg';
import productsImage from '@/assets/products-showcase.jpg';
import qualityImage from '@/assets/quality-control.jpg';
import teamImage from '@/assets/craftsmanship-team.jpg';

const timelineEvents = [
  {
    year: '1979',
    title: 'Fundación de PROSHOE S.A. DE C.V.',
    description: 'Nace PROSHOE S.A. DE C.V. con una producción inicial de 90 pares diarios de calzado para bebé.'
  },
  {
    year: '1981',
    title: 'Expansión de producción y líneas',
    description: 'Aumento de producción a 250 pares diarios y desarrollo de nuevas líneas y estilos para el mercado de bebé.'
  },
  {
    year: '1990',
    title: 'Diversificación a calzado infantil',
    description: 'Inicio de fabricación de calzado para niños, vendido en principales Boutiques, Cadenas Departamentales y Zapaterías de la República Mexicana. Producción de 500 pares diarios.'
  },
  {
    year: '1996',
    title: 'Inicio de servicios de Maquila',
    description: 'Nueva visión empresarial: maquila de zapato de guante, pegado y sandalias para dama. Producción de 1,000 pares diarios.'
  },
  {
    year: '1999',
    title: 'Inauguración de nueva planta',
    description: 'Inversión en infraestructura competitiva. Inauguración del edificio en Pórtico 109, Colonia Brisas del Campo Industrial.'
  },
  {
    year: '2009',
    title: 'Certificación ISO 9001:2008',
    description: 'Acreditación BSI como "Empresa Certificada en la Norma ISO 9001:2008". Inicio de exportaciones a Estados Unidos y Canadá con calzado tipo "Opanka".'
  },
  {
    year: '2010 - Actualidad',
    title: 'Liderazgo en exportación',
    description: 'Producción actual de 2,800 pares diarios de botas, zapatillas y sandalias para dama y caballero. Exportación a mercados exigentes como Estados Unidos, Japón y Canadá.'
  }
];

const capabilities = [
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: 'Maquila Completa',
    description: 'Servicio integral desde el diseño hasta el producto terminado con los más altos estándares.'
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'Cortes Especializados',
    description: 'Precisión en corte de materiales con tecnología avanzada y control de desperdicios.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-accent" />,
    title: 'Producto Terminado',
    description: 'Entrega de calzado completamente terminado, listo para comercialización directa.'
  }
];

const metrics = [
  { value: '15,000', label: 'Capcidad de pares por semana', icon: <Truck className="w-6 h-6" /> },
  { value: '100%', label: 'Orientados a la productividad', icon: <CheckCircle className="w-6 h-6" /> },
  { value: '60+', label: 'Clientes activos', icon: <Users className="w-6 h-6" /> },
  { value: '5', label: 'Países de exportación', icon: <Globe className="w-6 h-6" /> }
];

export default function Home() {
  return (
    <Layout showBreadcrumb={false}>
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Línea de producción de calzado PROSHOE" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative container-proshoe section-padding">
          <div className="max-w-4xl">
            <h1 className="hero-title mb-6">
              Desde <span className="text-accent">1990</span> impulsando 
              <br />marcas de calzado
            </h1>
            <p className="hero-subtitle mb-8 max-w-2xl">
              Especializados en maquila y fabricación de calzado con los más altos estándares 
              de calidad, cumplimiento garantizado y procesos certificados para el mercado nacional e internacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contactanos">
                <Button className="btn-cta text-lg px-8 py-4">
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/servicios">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="relative bg-primary-foreground/10 backdrop-blur-sm border-t border-primary-foreground/20">
          <div className="container-proshoe py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="flex items-center justify-center mb-3 text-accent">
                    {metric.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-montserrat font-bold text-primary-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
                Conoce Nuestra Historia
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Descubre cómo hemos crecido y evolucionado para convertirnos en líderes de la industria del calzado.
              </p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/n_KRE9NJX7E?start=2"
                title="Historia de PROSHOE - Nuestra Trayectoria"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Nuestra Trayectoria
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Más de dos décadas construyendo relaciones sólidas y desarrollando capacidades 
              que nos posicionan como líderes en maquila de calzado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {timelineEvents.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="proshoe-card">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <Calendar className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-accent mb-1">{event.year}</div>
                        <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Nuestras Capacidades
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos soluciones integrales en manufactura de calzado, 
              adaptándonos a las necesidades específicas de cada marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {capabilities.map((capability, index) => (
              <Card key={index} className="service-card text-center">
                <div className="mb-6">{capability.icon}</div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                Infraestructura de Vanguardia
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Líneas de producción especializadas</h4>
                    <p className="text-muted-foreground text-sm">Equipadas con tecnología moderna para diferentes tipos de construcción</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Control de calidad integral</h4>
                    <p className="text-muted-foreground text-sm">Sistema de inspección en cada etapa del proceso</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Capacidad flexible</h4>
                    <p className="text-muted-foreground text-sm">Adaptación a volúmenes y especificaciones variables</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Certificaciones internacionales</h4>
                    <p className="text-muted-foreground text-sm">Cumplimiento de estándares globales de calidad</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={qualityImage} 
                alt="Control de calidad en PROSHOE" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src={teamImage} 
                alt="Equipo de artesanos especializados" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={productsImage} 
                alt="Showcase de productos PROSHOE" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                Calidad que Habla por Sí Misma
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Cada par de zapatos que sale de nuestras instalaciones representa nuestro 
                compromiso con la excelencia. Trabajamos con las mejores marcas del mercado, 
                ofreciendo soluciones personalizadas que superan expectativas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/servicios">
                  <Button className="btn-outline">
                    Ver Nuestros Servicios
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/clientes">
                  <Button variant="outline" className="border-brand-ui hover:bg-brand-ui">
                    Conocer Clientes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-proshoe text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            ¿Listo para Trabajar Juntos?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Descubra cómo podemos ayudar a su marca a crecer con nuestros servicios 
            de maquila especializada y cumplimiento guaranteed.
          </p>
          <Link to="/contactanos">
            <Button className="btn-cta text-lg px-8 py-4">
              Solicitar Cotización Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
