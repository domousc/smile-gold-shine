import { BookOpen, Lightbulb, TrendingUp, DollarSign } from "lucide-react";

const Solution = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Aumentar seu faturamento",
      description: "Cobre de R$800 a R$2.500 por procedimento. Procedimentos rápidos e altamente valorizados que aumentam sua receita mensal.",
    },
    {
      icon: BookOpen,
      title: "Segurança na execução",
      description: "Aprenda o passo a passo completo sem improviso. Execute com confiança e previsibilidade de resultado desde o primeiro paciente.",
    },
    {
      icon: TrendingUp,
      title: "Diferenciação profissional",
      description: "Seja reconhecido como especialista em estética. Atraia mais pacientes e construa autoridade no mercado odontológico.",
    },
    {
      icon: Lightbulb,
      title: "Retorno imediato",
      description: "Aplique já no dia seguinte ao curso. Recupere seu investimento com apenas 1 procedimento realizado.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl text-center mb-16 font-bold">
          Com este curso, você vai...
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 rounded-xl bg-card border border-border hover:border-gold/50 transition-smooth hover-scale"
            >
              <div className="inline-flex w-16 h-16 rounded-full gradient-gold items-center justify-center shadow-gold">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
