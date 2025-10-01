import { Button } from "@/components/ui/button";
import draBethania from "@/assets/dra-bethania.jpg";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-background -z-10" />
      
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-3xl" />
              <img
                src={draBethania}
                alt="Dra. Bethânia Luna - Odontologia Estética"
                className="relative rounded-2xl shadow-gold w-full max-w-md lg:max-w-lg object-cover border border-gold/20"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
                Transforme sorrisos e aumente seus resultados: aprenda fechamento de diastema com resina, do jeito certo.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Curso prático e acessível para dentistas que querem dominar uma técnica simples, lucrativa e cada vez mais procurada.
              </p>
            </div>

            <Button 
              variant="gold" 
              size="xl" 
              onClick={scrollToOffer}
              className="w-full sm:w-auto"
            >
              Quero garantir meu acesso por apenas R$49
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
