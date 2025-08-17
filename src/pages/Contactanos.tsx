import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export default function Contactanos() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es obligatorio';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingrese un email válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Error en el formulario",
        description: "Por favor, corrija los errores antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "¡Mensaje enviado con éxito!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema. Por favor, intente nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding bg-brand-light">
          <div className="container-proshoe">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-accent-foreground" />
              </div>
              <h1 className="text-4xl font-montserrat font-bold text-foreground mb-6">
                ¡Gracias por contactarnos!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Hemos recibido su mensaje y nos pondremos en contacto con usted 
                dentro de las próximas 24 horas hábiles.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="btn-outline"
              >
                Enviar otro mensaje
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos listos para colaborar con su proyecto. 
              Contacte a nuestro equipo especializado para una cotización personalizada.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-proshoe">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="service-card">
                <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">
                  Solicitar Cotización
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="form-label">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`form-input ${errors.firstName ? 'border-destructive focus:ring-destructive/50' : ''}`}
                        placeholder="Su nombre"
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        aria-invalid={errors.firstName ? 'true' : 'false'}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="mt-2 text-sm text-destructive flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="form-label">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`form-input ${errors.lastName ? 'border-destructive focus:ring-destructive/50' : ''}`}
                        placeholder="Su apellido"
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        aria-invalid={errors.lastName ? 'true' : 'false'}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="mt-2 text-sm text-destructive flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'border-destructive focus:ring-destructive/50' : ''}`}
                      placeholder="su.email@empresa.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-destructive flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+52 (XXX) XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="form-label">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Comentarios / Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`form-input resize-none ${errors.message ? 'border-destructive focus:ring-destructive/50' : ''}`}
                      placeholder="Describa sus necesidades, volúmenes estimados, tipos de calzado de interés, etc."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={errors.message ? 'true' : 'false'}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-destructive flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="service-card">
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                      <p className="text-muted-foreground text-sm">
                      Pórtico ciento nueve, Brisas del Campo Industrial.<br />
                      37297 León, Guanajuato.<br />
                        México
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                      <p className="text-muted-foreground text-sm">+52 (477) 7712963</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">
                        ventas@proshoe.com.mx<br />
                        info@proshoe.com.mx
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Horarios</h4>
                      <p className="text-muted-foreground text-sm">
                        Lunes - Viernes: 8:00 - 18:00<br />
                        Sábados: 9:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map */}
              <Card className="service-card">
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-4">
                  Ubicación
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.5!2d-101.6777!3d21.1225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b3b6b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sP%C3%B3rtico+109%2C+Brisas+del+Campo+Industrial%2C+37297+Le%C3%B3n%2C+Gto.%2C+M%C3%A9xico!5e0!3m2!1ses!2smx!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de PROSHOE - León, Guanajuato"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href="https://maps.google.com/?q=P%C3%B3rtico+109,+Brisas+del+Campo+Industrial,+37297+Le%C3%B3n,+Gto.,+M%C3%A9xico" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </Card>


            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}