import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Layers, Hammer, Scissors, Hand } from 'lucide-react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Layers className="w-12 h-12 text-accent" />,
    title: 'Pegado',
    description: 'Utilizamos adhesivos base agua de alto desempeño que garantizan una unión duradera y resistente. Nuestro control riguroso del proceso asegura la máxima durabilidad y confort en cada par.',
    features: [
      'Adhesivos certificados de alta calidad',
      'Control de temperatura y humedad',
      'Pruebas de resistencia y durabilidad',
      'Acabados profesionales'
    ]
  },
  {
    icon: <Hand className="w-12 h-12 text-accent" />,
    title: 'California',
    description: 'Proceso de unión corte-plantilla con guardafango y terminado tradicional que ofrece alta comodidad y flexibilidad. Ideal para calzado casual y deportivo con excelente adaptabilidad al pie.',
    features: [
      'Construcción flexible y cómoda',
      'Guardafango de alta calidad',
      'Terminado tradicional perfeccionado',
      'Adaptabilidad superior al pie'
    ]
  },
  {
    icon: <Scissors className="w-12 h-12 text-accent" />,
    title: 'Lockstitcher',
    description: 'Costura final especializada que refuerza la unión de la suela sobre el pegado, proporcionando resistencia adicional y un acabado distintivo. Perfecto para calzado que requiere durabilidad extrema.',
    features: [
      'Refuerzo adicional de la unión',
      'Costura especializada de precisión',
      'Durabilidad extrema',
      'Acabado distintivo y profesional'
    ]
  },
  {
    icon: <Hammer className="w-12 h-12 text-accent" />,
    title: 'Guante & Opanka',
    description: 'Procesos artesanales y tejidos a mano que combinan técnicas tradicionales con estándares modernos. Ofrecen comodidad excepcional y alta apreciación en mercados internacionales exigentes.',
    features: [
      'Técnicas artesanales tradicionales',
      'Tejido a mano especializado',
      'Comodidad excepcional',
      'Valoración en mercados premium'
    ]
  }
];

export default function Servicios() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Maquilamos su producto para que usted se enfoque en la comercialización
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos servicios especializados de maquila con diferentes tipos de construcción, 
              adaptándonos a las necesidades específicas de cada marca y garantizando 
              la máxima calidad en cada proceso.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <div className="mb-8">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                      Características principales:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un enfoque sistemático que garantiza la calidad y el cumplimiento 
              en cada etapa de la producción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-accent-foreground">1</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                Análisis & Planificación
              </h3>
              <p className="text-muted-foreground text-sm">
                Evaluamos especificaciones técnicas y desarrollamos plan de producción personalizado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                Preparación & Corte
              </h3>
              <p className="text-muted-foreground text-sm">
                Selección de materiales y corte de precisión con control de desperdicios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                Manufactura
              </h3>
              <p className="text-muted-foreground text-sm">
                Proceso de construcción especializado según tipo requerido con monitoreo continuo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-accent-foreground">4</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                Control & Entrega
              </h3>
              <p className="text-muted-foreground text-sm">
                Inspección final rigurosa y entrega puntual con documentación completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                Garantía de Calidad
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cada proceso de construcción cuenta con protocolos específicos de control 
                  de calidad, desde la recepción de materiales hasta la entrega del producto final.
                </p>
                <p>
                  Nuestro equipo de inspectores especializados verifica constantemente 
                  que cada par cumpla con las especificaciones técnicas y estándares 
                  de calidad establecidos.
                </p>
                <p>
                  Implementamos sistemas de trazabilidad que permiten identificar 
                  y documentar cada etapa del proceso, garantizando la máxima 
                  transparencia y control.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground font-medium">Inspección de materias primas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground font-medium">Control en proceso continuo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground font-medium">Verificación final exhaustiva</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground font-medium">Documentación completa de calidad</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-6">
                  Certificaciones y Estándares
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-accent mb-2">ISO</div>
                    <div className="text-muted-foreground text-sm">Sistemas de gestión</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-accent mb-2">QC+</div>
                    <div className="text-muted-foreground text-sm">Control de calidad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-accent mb-2">ENV</div>
                    <div className="text-muted-foreground text-sm">Gestión ambiental</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-accent mb-2">SA</div>
                    <div className="text-muted-foreground text-sm">Responsabilidad social</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-proshoe text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            ¿Necesita una Ficha Técnica Detallada?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Solicite información específica sobre nuestros procesos de construcción 
            y descubra cuál es la mejor opción para su proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contactanos">
              <Button className="btn-cta text-lg px-8 py-4">
                Pedir Ficha Técnica
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/nuestros-compromisos">
              <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
                Ver Nuestros Compromisos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}