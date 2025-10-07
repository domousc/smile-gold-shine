import { AlertCircle, TrendingDown, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const PainPoints = () => {
  const checkoutUrl = "https://pay.hub.la/mZKCdzDrl8jZSoAnwsj8";

  const pains = [
    {
      icon: AlertCircle,
      text: "Frustração de perder pacientes para colegas que oferecem procedimentos estéticos com segurança",
    },
    {
      icon: TrendingDown,
      text: "Dúvida se está cobrando barato demais por não dominar técnicas avançadas de estética",
    },
    {
      icon: Users,
      text: "Medo de errar na execução e prejudicar a confiança do paciente no seu trabalho",
    },
    {
      icon: DollarSign,
      text: "Sentir que está deixando dinheiro na mesa ao recusar casos de fechamento de diastema",
    },
    {
      icon: AlertCircle,
      text: "Insegurança ao oferecer orçamentos de estética sem saber se conseguirá entregar o resultado esperado",
    },
    {
      icon: TrendingDown,
      text: "Ver colegas faturando mais com procedimentos simples que você ainda não domina",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold">
          Você já passou por isso?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border shadow-elegant hover:border-gold/50 transition-smooth"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <pain.icon className="w-6 h-6 text-gold" />
              </div>
              <p className="text-base text-foreground">{pain.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-lg text-muted-foreground">
            Chegou a hora de deixar essas inseguranças para trás
          </p>
          <Button 
            variant="gold" 
            size="lg"
            onClick={() => window.open(checkoutUrl, '_blank')}
            className="text-base"
          >
            Quero dominar a técnica agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
