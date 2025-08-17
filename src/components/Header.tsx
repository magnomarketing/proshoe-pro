import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const navigation = [{
  name: 'Nuestra Historia',
  href: '/'
}, {
  name: 'Nuestra Empresa',
  href: '/nuestra-empresa'
}, {
  name: 'Servicios',
  href: '/servicios'
}, {
  name: 'Nuestros Compromisos',
  href: '/nuestros-compromisos'
}, {
  name: 'Clientes',
  href: '/clientes'
}, {
  name: 'Contáctanos',
  href: '/contactanos'
}];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => {
    return location.pathname === href;
  };
  return <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container-proshoe">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-accent p-2 rounded-lg">
              <span className="text-accent-foreground font-montserrat font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-2xl font-montserrat font-bold text-primary-foreground">
                PROSHOE
              </h1>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}>
                {item.name}
              </Link>)}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-primary-foreground/80 text-sm">
              
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>email@tudominio.com</span>
              </div>
            </div>
            <Link to="/contactanos">
              <Button className="btn-cta">
                Solicitar Cotización
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button type="button" className="lg:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Abrir menú de navegación">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="lg:hidden bg-primary border-t border-primary-foreground/20">
          <div className="container-proshoe py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`text-primary-foreground hover:text-accent transition-colors py-2 ${isActive(item.href) ? 'text-accent font-semibold' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="pt-4 border-t border-primary-foreground/20">
                <Link to="/contactanos" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="btn-cta w-full">
                    Solicitar Cotización
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>}
    </header>;
}