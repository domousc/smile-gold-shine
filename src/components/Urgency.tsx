import { AlertCircle, Users, Clock } from "lucide-react";

const Urgency = () => {
  return (
    <section className="py-12 px-4 bg-primary">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <AlertCircle className="w-8 h-8 text-gold mx-auto" />
            <p className="text-sm font-semibold text-primary-foreground">
              Preço promocional
            </p>
            <p className="text-xs text-primary-foreground/70">
              Esse valor pode aumentar a qualquer momento
            </p>
          </div>
          
          <div className="space-y-2">
            <Users className="w-8 h-8 text-gold mx-auto" />
            <p className="text-sm font-semibold text-primary-foreground">
              Vagas limitadas
            </p>
            <p className="text-xs text-primary-foreground/70">
              Para garantir suporte de qualidade
            </p>
          </div>
          
          <div className="space-y-2">
            <Clock className="w-8 h-8 text-gold mx-auto" />
            <p className="text-sm font-semibold text-primary-foreground">
              Acesso imediato
            </p>
            <p className="text-xs text-primary-foreground/70">
              Comece a estudar em menos de 2 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urgency;