import { Star, Quote, Award, Users, Globe, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';

const testimonials = [
  {
    name: 'María González',
    position: 'Directora de Operaciones',
    company: '[Marca de Calzado A]',
    content: 'PROSHOE ha sido nuestro socio estratégico durante más de 5 años. Su capacidad de adaptación y calidad constante nos ha permitido crecer con confianza en mercados exigentes.',
    rating: 5
  },
  {
    name: 'Carlos Ruiz',
    position: 'Gerente de Producción',
    company: '[Marca de Calzado B]',
    content: 'La precisión en tiempos de entrega y la calidad consistente de PROSHOE nos ha permitido mantener nuestra reputación en el mercado internacional. Excelente servicio.',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    position: 'CEO',
    company: '[Marca de Calzado C]',
    content: 'Encontramos en PROSHOE no solo un proveedor, sino un verdadero socio que entiende nuestras necesidades y contribuye activamente al éxito de nuestros productos.',
    rating: 5
  }
];

const clientLogos = [
  { name: 'Flexi', category: 'Calzado Casual' },
  { name: 'HH Brown', category: 'Calzado Premium' },
  { name: 'Born', category: 'Calzado Artesanal' },
  { name: 'Hot Chocolate Design', category: 'Calzado Femenino' },
  { name: 'Piel y Madera', category: 'Calzado Artesanal' },
  { name: 'Coqueta', category: 'Calzado Infantil' },
  { name: 'Bambino', category: 'Calzado Infantil' },
  { name: 'Vavito', category: 'Calzado Casual' },
  { name: 'Tempe', category: 'Calzado Deportivo' },
  { name: 'Court', category: 'Calzado Deportivo' },
  { name: 'Kínder', category: 'Calzado Infantil' },
  { name: 'Julio de Mucha', category: 'Calzado Formal' },
  { name: 'Comando', category: 'Calzado Industrial' },
  { name: 'Olukay', category: 'Calzado Casual' },
  { name: 'Carlo Rossetti', category: 'Calzado Ejecutivo' },
  { name: 'My Mayu', category: 'Calzado Femenino' }
];

const achievements = [
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: 'Reconocimiento por Calidad',
    description: 'Premio otorgado por consistencia en estándares de calidad durante 3 años consecutivos.'
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: 'Proveedor Preferido',
    description: 'Certificación como proveedor estratégico por múltiples marcas líderes del sector.'
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: 'Expansión Internacional',
    description: 'Logros en penetración de mercados internacionales con productos de alta calidad.'
  }
];

export default function Clientes() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Nuestros Clientes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Algunas marcas que hemos servido con excelencia, 
              construyendo relaciones de confianza y crecimiento mutuo.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Marcas que Confían en Nosotros
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trabajamos con marcas reconocidas en diferentes segmentos del calzado, 
              desde formal hasta deportivo, manteniendo los más altos estándares en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <Card key={index} className="service-card text-center hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-montserrat font-semibold text-foreground mb-2 text-lg">
                  {client.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {client.category}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic">
              * Por políticas de confidencialidad, algunos nombres y logotipos no son mostrados públicamente.
              <br />
              Contacte directamente para referencias específicas y casos de éxito detallados.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestro mejor indicador de éxito. 
              Estas son algunas de sus experiencias trabajando con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="service-card relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-accent-foreground" />
                </div>
                
                <div className="mb-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Reconocimientos y Logros
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              El reconocimiento de nuestros clientes y la industria valida nuestro 
              compromiso con la excelencia y la mejora continua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="service-card text-center">
                <div className="mb-6">{achievement.icon}</div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-proshoe">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Resultados que Respaldan Nuestra Excelencia
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Métricas que demuestran nuestro compromiso con el éxito mutuo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                100%
              </div>
              <div className="text-primary-foreground/80">
                enfocados en la Satisfacción del cliente
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                15
              </div>
              <div className="text-primary-foreground/80">
                Clientes activos
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                95%
              </div>
              <div className="text-primary-foreground/80">
                Retención de clientes
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                6
              </div>
              <div className="text-primary-foreground/80">
                Países servidos
              </div>
            </div>
          </div>

          <div className="mt-16 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                ¿Su Marca Podría Ser la Siguiente?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Únase a las marcas que han encontrado en PROSHOE el socio ideal 
                para llevar sus productos al siguiente nivel de calidad y éxito.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Proceso de integración rápido</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Soporte técnico especializado</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Escalabilidad garantizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}