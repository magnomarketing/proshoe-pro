import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout showBreadcrumb={false}>
      <section className="section-padding bg-brand-light">
        <div className="container-proshoe">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-9xl font-montserrat font-bold text-accent/20 mb-4">
              404
            </div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Página No Encontrada
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Lo sentimos, la página que está buscando no existe o ha sido movida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="btn-cta flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Ir al Inicio
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="btn-outline flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Regresar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
