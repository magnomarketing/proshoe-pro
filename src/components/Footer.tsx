import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-proshoe py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-accent p-2 rounded-lg">
                <span className="text-accent-foreground font-montserrat font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold">PROSHOE</h3>
                <p className="text-sm text-primary-foreground/80">
                  Maquila y fabricación de calzado con calidad y cumplimiento
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Desde [AÑO] impulsando marcas de calzado con procesos estandarizados, 
              control de calidad superior y cumplimiento garantizado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link to="/nuestra-empresa" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Nuestra Empresa
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nuestros-compromisos" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Nuestros Compromisos
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Clientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>[Calle, Colonia]</p>
                  <p>[CP, Ciudad, Estado]</p>
                  <p>México</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+52 (XXX) XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">email@tudominio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">Lun - Vie: 8:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/80">
                Manténgase actualizado con nuestras novedades
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Su email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-lg text-sm text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-r-lg hover:bg-accent/90 transition-colors text-sm font-medium">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 PROSHOE. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/aviso-de-privacidad" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Aviso de Privacidad
              </Link>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}