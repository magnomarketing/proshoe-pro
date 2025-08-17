import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const navigation = [{
  name: 'Historia',
  href: '/'
}, {
  name: 'Empresa',
  href: '/nuestra-empresa'
}, {
  name: 'Servicios',
  href: '/servicios'
}, {
  name: 'Compromisos',
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
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="PROSHOE" 
              className="h-20 w-auto"
            />
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
              <a href="tel:+524777712963" className="flex items-center space-x-1 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>+52 477 771 2963</span>
              </a>
              {/* <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>email@tudominio.com</span>
                </div> */}
            </div>
            <Link to="/contactanos">
              <Button className="bg-[#F5F7FA] text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-gray-300 hover:border-gray-400">
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
                  <Button className="bg-[#F5F7FA] text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-gray-300 hover:border-gray-400 w-full">
                    Solicitar Cotización
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>}
    </header>;
}