import { Button } from "@/components/ui/button";
import { Check, Clock, Smartphone, Infinity } from "lucide-react";

const Offer = () => {
  const benefits = [
    { icon: Clock, text: "Acesso imediato após a inscrição" },
    { icon: Smartphone, text: "Assista no seu tempo, em qualquer dispositivo" },
    { icon: Infinity, text: "Acesso vitalício ao conteúdo" },
  ];

  return (
    <section id="oferta" className="py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Você pagaria até <span className="text-foreground font-semibold line-through">R$2.000</span> em um curso de estética presencial.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Com apenas <span className="text-gold">R$49</span>, você aprende a técnica mais pedida pelos pacientes
            </h2>
          </div>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold/30 blur-3xl rounded-full animate-pulse" />
            <div className="relative gradient-gold text-primary-foreground rounded-2xl p-8 shadow-gold border-2 border-gold">
              <p className="text-sm mb-2 opacity-90">OFERTA ÚNICA</p>
              <p className="text-6xl md:text-7xl font-bold">R$ 49</p>
              <p className="text-sm mt-2 opacity-90">Pagamento único</p>
            </div>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-gold/50 transition-smooth"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-left text-sm text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-8">
            <Button 
              variant="gold" 
              size="xl"
              onClick={() => window.open("https://pay.hub.la/mZKCdzDrl8jZSoAnwsj8", '_blank')}
              className="w-full sm:w-auto text-lg animate-pulse hover:animate-none"
            >
              Garantir acesso agora por R$49
            </Button>
            
            <p className="text-sm text-muted-foreground">
              💳 Pagamento seguro • 🔒 Acesso imediato • ♾️ Sem mensalidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
