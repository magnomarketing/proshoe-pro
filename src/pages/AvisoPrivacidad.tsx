import { Download, FileText, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';

export default function AvisoPrivacidad() {
  const handleDownloadPDF = () => {
    // Simulate PDF download
    console.log('Descargando PDF del Aviso de Privacidad...');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Aviso de Privacidad
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Información sobre el tratamiento y protección de sus datos personales 
              conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="max-w-4xl mx-auto">
            {/* Download Section */}
            <Card className="service-card mb-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-foreground">
                      Versión completa del Aviso de Privacidad
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Descargue el documento completo en formato PDF
                    </p>
                  </div>
                </div>
                <Button onClick={handleDownloadPDF} className="btn-outline">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar PDF
                </Button>
              </div>
            </Card>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    Responsable del Tratamiento
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    PROSHOE, con domicilio en [Calle, Colonia, CP, Ciudad, Estado, México], 
                    es el responsable del uso y protección de sus datos personales, y 
                    al respecto le informamos lo siguiente:
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    Finalidades del Tratamiento
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sus datos personales serán utilizados para las siguientes finalidades:
                  </p>
                  <div className="bg-brand-light rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">Finalidades Primarias (necesarias):</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Proporcionar servicios de maquila y fabricación de calzado</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Procesar cotizaciones y órdenes de compra</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Establecer comunicación comercial</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cumplir obligaciones contractuales</span>
                      </li>
                    </ul>
                    
                    <h3 className="font-semibold text-foreground mb-3 mt-6">Finalidades Secundarias (adicionales):</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Envío de información comercial y promocional</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Estudios de mercado y mejora de servicios</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Invitaciones a eventos corporativos</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    Datos Personales Recabados
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Para cumplir las finalidades descritas, utilizamos los siguientes datos personales:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-brand-light rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Datos de Identificación:</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Nombre y apellidos</li>
                        <li>• Empresa</li>
                        <li>• Cargo o puesto</li>
                        <li>• RFC (cuando aplique)</li>
                      </ul>
                    </div>
                    <div className="bg-brand-light rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Datos de Contacto:</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Dirección postal</li>
                        <li>• Teléfono</li>
                        <li>• Correo electrónico</li>
                        <li>• Datos de facturación</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    Transferencias de Datos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sus datos personales podrán ser compartidos únicamente con proveedores de servicios 
                    necesarios para el cumplimiento de nuestras obligaciones contractuales, tales como 
                    servicios de mensajería, servicios contables y sistemas de gestión empresarial. 
                    En todos los casos, garantizamos que los terceros mantengan el mismo nivel de 
                    protección que aplicamos internamente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    Derechos ARCO
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué 
                    los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, 
                    es su derecho solicitar la corrección, actualización, rectificación de los 
                    inexactos (Rectificación), cancelación, eliminación (Cancelación) cuando 
                    considere que no se requieren para las finalidades establecidas, u oponerse 
                    al uso (Oposición) para fines específicos.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">Para ejercer sus derechos ARCO:</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Email:</strong> email@tudominio.com</p>
                      <p><strong>Asunto:</strong> Solicitud de Derechos ARCO</p>
                      <p><strong>Tiempo de respuesta:</strong> 20 días hábiles</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    Revocación del Consentimiento
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    En cualquier momento, usted puede revocar el consentimiento que nos ha otorgado 
                    para el tratamiento de sus datos personales enviando un correo electrónico a 
                    email@tudominio.com con el asunto "Revocación de Consentimiento". 
                    Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos 
                    atender su solicitud de manera inmediata, ya que es posible que por alguna 
                    obligación legal requiramos seguir tratando sus datos personales.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    Medidas de Seguridad
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    PROSHOE ha implementado medidas de seguridad administrativas, técnicas y físicas 
                    para proteger sus datos personales contra daño, pérdida, alteración, destrucción 
                    o el uso, acceso o tratamiento no autorizados. Únicamente el personal autorizado 
                    tiene acceso a sus datos personales.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    Cambios al Presente Aviso
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    El presente aviso de privacidad puede sufrir modificaciones, cambios o 
                    actualizaciones derivadas de nuevos requerimientos legales. Nos comprometemos 
                    a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de 
                    privacidad a través de nuestro sitio web.
                  </p>
                </section>

                {/* Footer Info */}
                <div className="bg-primary text-primary-foreground rounded-lg p-8 mt-12">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-montserrat font-bold">Información del Documento</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-primary-foreground/80 mb-1">Fecha de última actualización:</p>
                      <p className="font-semibold">[DD] de [Mes] de 2024</p>
                    </div>
                    <div>
                      <p className="text-primary-foreground/80 mb-1">Versión:</p>
                      <p className="font-semibold">1.0</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                    <p className="text-xs text-primary-foreground/70">
                      <strong>Nota importante:</strong> Este aviso de privacidad es un documento genérico 
                      y no constituye asesoría legal. Se recomienda validar su contenido con un especialista 
                      en protección de datos antes de su implementación definitiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}