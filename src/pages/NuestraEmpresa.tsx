import { Target, Eye, Award, Users, Settings, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';

const strengths = [
  {
    icon: <Settings className="w-8 h-8 text-accent" />,
    title: 'Estandarización de Procesos',
    description: 'Metodologías probadas que garantizan consistencia y calidad en cada etapa de producción.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-accent" />,
    title: 'Implementación Efectiva',
    description: 'Capacidad de adaptación y ejecución de especificaciones técnicas complejas.'
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: 'Control de Calidad Superior',
    description: 'Sistema integral de inspección y validación en cada punto crítico del proceso.'
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: 'Capacidad Instalada',
    description: 'Infraestructura robusta y equipo humano especializado para volúmenes variables.'
  }
];

const infrastructure = [
  'Múltiples líneas de producción especializadas por tipo de construcción',
  'Operación en múltiples turnos para maximizar capacidad',
  'Departamento de inspección y control de calidad dedicado',
  'Almacenes climatizados para materia prima y producto terminado',
  'Laboratorio de pruebas y validación de materiales',
  'Sistema de trazabilidad completa del proceso productivo',
  'Área de desarrollo y muestras para nuevos productos',
  'Equipos de corte automatizado y semiautomatizado'
];

export default function NuestraEmpresa() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Nuestra Empresa
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Especialistas en maquila de calzado con más de dos décadas de experiencia, 
              comprometidos con la excelencia y el crecimiento de nuestros socios comerciales.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
                Quiénes Somos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PROSHOE es una empresa mexicana especializada en la maquila y fabricación 
                  de calzado de alta calidad. Desde nuestros inicios en [AÑO], hemos desarrollado 
                  una sólida reputación basada en la excelencia operativa, el cumplimiento 
                  puntual y la innovación constante.
                </p>
                <p>
                  Nuestra experiencia abarca diferentes tipos de construcción de calzado, 
                  desde procesos tradicionales hasta técnicas modernas, siempre con el objetivo 
                  de ofrecer productos que superen las expectativas de calidad y durabilidad.
                </p>
                <p>
                  Trabajamos como socios estratégicos de marcas reconocidas, proporcionando 
                  soluciones integrales que permiten a nuestros clientes enfocarse en la 
                  comercialización mientras nosotros nos encargamos de la manufactura 
                  con los más altos estándares.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-montserrat font-semibold mb-4">
                  Compromiso con la Excelencia
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  "Nuestro éxito se mide por el éxito de nuestros clientes. 
                  Cada proyecto es una oportunidad para demostrar nuestro 
                  compromiso con la calidad, la innovación y el cumplimiento."
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">Dirección General</div>
                    <div className="text-primary-foreground/80 text-sm">PROSHOE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="service-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground">Misión</h3>
              </div>
              <p className="text-muted-foreground text-center leading-relaxed">
                Ofrecer servicios de maquila de calzado de clase mundial, 
                proporcionando soluciones integrales que permitan a nuestros 
                clientes alcanzar sus objetivos comerciales mediante procesos 
                eficientes, calidad superior y cumplimiento garantizado.
              </p>
            </Card>

            <Card className="service-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground">Visión</h3>
              </div>
              <p className="text-muted-foreground text-center leading-relaxed">
                Ser reconocidos como el socio estratégico preferido en maquila 
                de calzado en México y Norteamérica, destacando por nuestra 
                innovación, sostenibilidad y contribución al crecimiento 
                de las marcas que servimos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Nuestras Fortalezas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Capacidades distintivas que nos posicionan como líderes en el sector 
              de maquila de calzado especializada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <Card key={index} className="service-card text-center h-full">
                <div className="mb-6">{strength.icon}</div>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-4">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {strength.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
                Infraestructura
              </h2>
              <p className="text-lg text-muted-foreground">
                Instalaciones modernas y equipamiento especializado para garantizar 
                la máxima eficiencia y calidad en nuestros procesos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infrastructure.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-proshoe">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Cifras que Respaldan Nuestra Experiencia
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Resultados tangibles de nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                [XX]+
              </div>
              <div className="text-primary-foreground/80">
                Años de experiencia
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                [XXX]+
              </div>
              <div className="text-primary-foreground/80">
                Proyectos completados
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                [X.X]M
              </div>
              <div className="text-primary-foreground/80">
                Pares producidos
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                99%
              </div>
              <div className="text-primary-foreground/80">
                Satisfacción del cliente
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}