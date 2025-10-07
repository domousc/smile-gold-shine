import { Button } from "@/components/ui/button";
import bethaniaBanner from "@/assets/bethania-hero.png";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gold/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(218,165,32,0.15),transparent_50%)]" />
      
      <div className="container relative z-10 px-4 sm:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Content Column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 order-2 lg:order-1">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold backdrop-blur-sm">
                ✨ Curso Exclusivo Online
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl">
              Domine o fechamento de{" "}
              <span className="text-gold">diastema com resina</span> e cobre até 3x mais
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Aprenda a técnica estética mais procurada pelos pacientes, ganhe autoridade no mercado e aumente seu faturamento com procedimentos rápidos e altamente valorizados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Button 
                variant="gold" 
                size="xl" 
                onClick={scrollToOffer}
                className="text-sm sm:text-base md:text-lg px-8 py-6 h-auto animate-pulse hover:animate-none shadow-elegant"
              >
                Quero garantir meu acesso por apenas R$49
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-gold text-xl">✓</span>
                <span>Certificado</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold text-xl">✓</span>
                <span>100% Online</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold text-xl">✓</span>
                <span>Acesso vitalício</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-3xl" />
              
              {/* Image */}
              <div className="relative">
                <img
                  src={bethaniaBanner}
                  alt="Dra. Bethânia Luna - Especialista em Odontologia Estética"
                  className="relative w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-background/95 backdrop-blur-sm border border-gold/30 rounded-2xl p-4 shadow-elegant">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-2xl">👩‍⚕️</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Dra. Bethânia Luna</p>
                    <p className="text-xs text-muted-foreground">Odontologia Estética</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
