import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              Essa é a sua chance de transformar seus resultados
            </span>
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Com um investimento menor do que o valor de uma consulta simples.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button 
            variant="gold" 
            size="xl"
            onClick={scrollToOffer}
            className="text-lg px-12 animate-pulse hover:animate-none"
          >
            Quero me inscrever agora por R$49
          </Button>
          <p className="text-sm text-primary-foreground/60">
            ⚡ Acesso imediato • 🎓 Certificado incluso • ♾️ Suporte vitalício
          </p>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/70">
            Milhares de dentistas já estão faturando mais com essa técnica. Não fique para trás.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
