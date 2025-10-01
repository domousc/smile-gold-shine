import { BookOpen, Lightbulb, TrendingUp } from "lucide-react";

const Solution = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Dominar a técnica",
      description: "Passo a passo de fechamento de diastema com resina",
    },
    {
      icon: Lightbulb,
      title: "Ganhar experiência real",
      description: "Exemplos práticos e diretos ao ponto",
    },
    {
      icon: TrendingUp,
      title: "Aumentar faturamento",
      description: "Agregar valor estético e cobrar mais por procedimentos simples",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl text-center mb-16">
          Com este curso, você vai...
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 rounded-xl hover:bg-secondary/50 transition-smooth"
            >
              <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark items-center justify-center shadow-gold">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">{benefit.title}</h3>
              <p className="text-lg text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
