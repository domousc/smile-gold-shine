import { Clock, Play, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Timeline = () => {
  const checkoutUrl = "https://pay.hub.la/mZKCdzDrl8jZSoAnwsj8";

  const steps = [
    {
      icon: Play,
      time: "Hoje",
      title: "Você se inscreve",
      description: "Acesso imediato a todas as aulas e materiais complementares"
    },
    {
      icon: Clock,
      time: "Nas próximas horas",
      title: "Assiste o curso completo",
      description: "Aprende o passo a passo detalhado da técnica de fechamento de diastema"
    },
    {
      icon: Zap,
      time: "Amanhã mesmo",
      title: "Aplica no primeiro paciente",
      description: "Com confiança e segurança, usando todo o conhecimento adquirido"
    },
    {
      icon: TrendingUp,
      time: "Nos próximos dias",
      title: "Recupera o investimento",
      description: "R$49 investidos viram R$800-1500 por procedimento realizado"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua Jornada Começa Agora
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Em menos de 48 horas você pode estar faturando com fechamento de diastema
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line - hidden on last item and on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold/50 to-gold/10" />
                )}
                
                <div className="relative bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-smooth h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-gold mb-1">{step.time}</p>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-sm font-bold text-primary-foreground border-2 border-background">
                    {index + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center space-y-6">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-xl px-6 py-4">
            <p className="text-sm font-semibold text-gold">
              ⚡ O tempo entre você e seus primeiros R$1.500 extras? Apenas 48 horas.
            </p>
          </div>
          <Button 
            variant="gold" 
            size="xl"
            onClick={() => window.open(checkoutUrl, '_blank')}
            className="shadow-elegant"
          >
            Começar minha jornada agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;