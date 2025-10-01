import { AlertCircle, TrendingDown, Users, DollarSign } from "lucide-react";

const PainPoints = () => {
  const pains = [
    {
      icon: AlertCircle,
      text: "Insegurança ao oferecer fechamentos estéticos por não dominar a técnica",
    },
    {
      icon: TrendingDown,
      text: "Medo de perder pacientes por não entregar o resultado que eles esperam",
    },
    {
      icon: Users,
      text: "Sentir que outros colegas estão avançando e faturando mais",
    },
    {
      icon: DollarSign,
      text: "Não conseguir cobrar de forma justa por falta de confiança",
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
      </div>
    </section>
  );
};

export default PainPoints;
