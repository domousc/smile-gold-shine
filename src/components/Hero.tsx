import { Button } from "@/components/ui/button";
import draBethania from "@/assets/dra-bethania.jpg";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center justify-center px-6 pt-16 pb-12 md:py-20 lg:min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-background -z-10" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="w-full mx-auto flex flex-col items-center gap-8 md:gap-12 lg:grid lg:grid-cols-2 lg:items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1 w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-md lg:max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-3xl" />
              <img
                src={draBethania}
                alt="Dra. Bethânia Luna - Odontologia Estética"
                className="relative rounded-2xl shadow-gold w-full h-auto object-cover border border-gold/20"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 w-full flex flex-col items-center text-center lg:items-start lg:text-left gap-3 md:gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold max-w-[22ch] mx-auto lg:mx-0">
              Domine o fechamento de diastema com resina e cobre até 3x mais por cada sorriso transformado
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto lg:mx-0">
              Aprenda a técnica estética mais procurada pelos pacientes, ganhe autoridade no mercado e aumente seu faturamento com procedimentos rápidos e altamente valorizados.
            </p>

            <Button 
              variant="gold" 
              size="lg" 
              onClick={scrollToOffer}
              className="w-full sm:w-auto animate-pulse hover:animate-none text-xs sm:text-sm md:text-base px-4 sm:px-6 py-3 sm:py-4 whitespace-normal sm:whitespace-nowrap leading-tight"
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
