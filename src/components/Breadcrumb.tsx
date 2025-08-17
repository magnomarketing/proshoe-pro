import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

const pageLabels: Record<string, string> = {
  '/': 'Inicio',
  '/nuestra-empresa': 'Nuestra Empresa',
  '/servicios': 'Servicios',
  '/nuestros-compromisos': 'Nuestros Compromisos',
  '/clientes': 'Clientes',
  '/contactanos': 'Contáctanos',
  '/aviso-de-privacidad': 'Aviso de Privacidad',
};

export default function Breadcrumb() {
  const location = useLocation();
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', href: '/' },
    { label: pageLabels[location.pathname] || 'Página', href: location.pathname }
  ];

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />}
            {index === 0 && <Home className="w-4 h-4 mr-2" />}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-foreground font-medium">{item.label}</span>
            ) : (
              <Link
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}