import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

interface LayoutProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
}

export default function Layout({ children, showBreadcrumb = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {showBreadcrumb && (
          <div className="bg-background py-4">
            <div className="container-proshoe">
              <Breadcrumb />
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}