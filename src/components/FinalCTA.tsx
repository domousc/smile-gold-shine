import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-card border-y border-border">
      <div className="container max-w-4xl text-center space-y-8">
        <h2 className="text-3xl md:text-4xl text-gold font-bold">
          Essa é a sua chance de transformar seus resultados com um investimento menor do que o valor de uma consulta.
        </h2>
        
        <Button 
          variant="gold" 
          size="xl"
          onClick={scrollToOffer}
          className="text-lg"
        >
          Quero me inscrever agora
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
