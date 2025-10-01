import { Button } from "@/components/ui/button";
import { Check, Clock, Smartphone, Infinity } from "lucide-react";

const Offer = () => {
  const benefits = [
    { icon: Clock, text: "Acesso imediato após a inscrição" },
    { icon: Smartphone, text: "Assista no seu tempo, em qualquer dispositivo" },
    { icon: Infinity, text: "Acesso vitalício ao conteúdo" },
  ];

  return (
    <section id="oferta" className="py-20 px-4">
      <div className="container max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tudo isso por apenas
          </h2>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold/30 blur-3xl rounded-full" />
            <div className="relative gradient-gold text-primary-foreground rounded-2xl p-8 shadow-gold border border-gold">
              <p className="text-6xl md:text-7xl font-bold">R$ 49</p>
            </div>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-left text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-8">
            <Button 
              variant="gold" 
              size="xl"
              className="w-full sm:w-auto text-lg"
            >
              Garantir acesso agora
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Sem mensalidade, sem taxas escondidas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
