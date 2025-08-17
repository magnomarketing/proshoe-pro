import { Shield, Users, Star, Award, CheckCircle, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';

const qualityPrinciples = [
  {
    icon: <Target className="w-8 h-8 text-accent" />,
    title: 'Planeación Estratégica',
    description: 'Desarrollamos planes detallados que anticipan necesidades y optimizan recursos para garantizar el éxito de cada proyecto.'
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: 'Formación Continua',
    description: 'Invertimos constantemente en la capacitación de nuestro equipo para mantener los más altos estándares de competencia técnica.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-accent" />,
    title: 'Trabajo Sistémico',
    description: 'Implementamos metodologías probadas que aseguran consistencia y eficiencia en todos nuestros procesos operativos.'
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: 'Evaluación Rigurosa',
    description: 'Monitoreamos y medimos constantemente nuestro desempeño para identificar oportunidades de mejora continua.'
  },
  {
    icon: <Star className="w-8 h-8 text-accent" />,
    title: 'Innovación Permanente',
    description: 'Adoptamos nuevas tecnologías y metodologías que nos permiten ofrecer soluciones cada vez más efectivas.'
  },
  {
    icon: <Shield className="w-8 h-8 text-accent" />,
    title: 'Mejora Continua',
    description: 'Cultivamos una cultura de excelencia donde cada miembro del equipo contribuye al perfeccionamiento constante.'
  }
];

const collaboratorCommitments = [
  'Proporcionar un ambiente de trabajo seguro y saludable',
  'Ofrecer oportunidades de desarrollo profesional y personal',
  'Reconocer y valorar las contribuciones individuales',
  'Fomentar la comunicación abierta y el trabajo en equipo',
  'Mantener condiciones laborales justas y equitativas',
  'Promover el equilibrio entre vida personal y profesional'
];

const clientCommitments = [
  'Generar confianza mediante transparencia y comunicación efectiva',
  'Ser la primera opción por calidad, servicio y cumplimiento',
  'Garantizar la seguridad y trazabilidad en todos nuestros procesos',
  'Cumplir puntualmente con tiempos de entrega acordados',
  'Ofrecer soluciones personalizadas según necesidades específicas',
  'Mantener confidencialidad absoluta de información comercial'
];

export default function NuestrosCompromisos() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Nuestros Compromisos
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Principios fundamentales que guían nuestras operaciones y definen 
              nuestra relación con colaboradores, clientes y la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Política de Calidad
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestro compromiso con la excelencia se basa en seis pilares fundamentales 
              que garantizan la máxima calidad en cada proceso y producto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityPrinciples.map((principle, index) => (
              <Card key={index} className="service-card text-center h-full">
                <div className="mb-6">{principle.icon}</div>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-4">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Collaborators */}
            <div>
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Compromiso con Colaboradores
                </h2>
                <p className="text-muted-foreground">
                  Nuestro equipo es nuestro activo más valioso. Nos comprometemos a crear 
                  un ambiente que fomente el crecimiento personal y profesional.
                </p>
              </div>

              <div className="space-y-4">
                {collaboratorCommitments.map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clients */}
            <div>
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Compromiso con Clientes
                </h2>
                <p className="text-muted-foreground">
                  Cada cliente es un socio estratégico. Trabajamos incansablemente para 
                  superar sus expectativas y contribuir a su éxito comercial.
                </p>
              </div>

              <div className="space-y-4">
                {clientCommitments.map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Certificaciones y Auditorías
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mantenemos certificaciones internacionales y nos sometemos regularmente 
              a auditorías para garantizar el cumplimiento de los más altos estándares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="service-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                ISO 9001
              </h3>
              <p className="text-muted-foreground text-sm">
                Sistema de gestión de calidad certificado internacionalmente
              </p>
            </Card>

            <Card className="service-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                OHSAS 18001
              </h3>
              <p className="text-muted-foreground text-sm">
                Seguridad y salud ocupacional en el trabajo
              </p>
            </Card>

            <Card className="service-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                ISO 14001
              </h3>
              <p className="text-muted-foreground text-sm">
                Gestión ambiental y sostenibilidad
              </p>
            </Card>

            <Card className="service-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                SA 8000
              </h3>
              <p className="text-muted-foreground text-sm">
                Responsabilidad social empresarial
              </p>
            </Card>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-12 text-primary-foreground text-center">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
              Auditado y Certificado
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-3xl mx-auto">
              Nos sometemos regularmente a auditorías de terceros independientes 
              para validar nuestros procesos y mantener la mejora continua en 
              todas nuestras operaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-accent mb-1">
                  Anual
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  Auditorías internas
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-primary-foreground/20"></div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-accent mb-1">
                  Semestral
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  Revisiones externas
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-primary-foreground/20"></div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-accent mb-1">
                  100%
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  Conformidad lograda
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}