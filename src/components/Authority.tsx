import draBethania from "@/assets/dra-bethania.jpg";
import bethaniaSpeaking from "@/assets/bethania-speaking.jpg";
import { Award, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Authority = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full border border-gold/30">
              <p className="text-sm font-semibold text-gold">
                SOBRE A INSTRUTORA
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Dra. Bethânia Luna
            </h2>
            
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Especialista em odontologia estética com <span className="text-foreground font-semibold">milhares de procedimentos realizados em resina composta</span>, incluindo transformações em personalidades reconhecidas nacionalmente.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 py-4">
                <div className="flex items-start gap-3 bg-card p-4 rounded-xl border border-gold/20">
                  <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Famosos Atendidos</p>
                    <p className="text-xs text-muted-foreground">Tiringa, Geyson Palitot e outros</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card p-4 rounded-xl border border-gold/20">
                  <Award className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Palestrante Internacional</p>
                    <p className="text-xs text-muted-foreground">Levando técnicas brasileiras ao mundo</p>
                  </div>
                </div>
              </div>

              <p className="text-foreground font-semibold italic border-l-4 border-gold pl-4">
                "Não é teoria. É prática real de consultório, do jeito que realmente funciona no dia a dia com pacientes reais."
              </p>
              <p>
                Agora compartilho pela primeira vez em formato de curso online a técnica completa de fechamento de diastema que uso diariamente no meu consultório.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-3xl" />
              <img
                src={draBethania}
                alt="Dra. Bethânia Luna no consultório"
                className="relative rounded-2xl shadow-gold w-full object-cover border border-gold/20"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-3xl" />
              <img
                src={bethaniaSpeaking}
                alt="Dra. Bethânia Luna palestrando internacionalmente"
                className="relative rounded-2xl shadow-gold w-full object-cover border border-gold/20"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs font-semibold text-primary-foreground">
                  Compartilhando conhecimento em congressos internacionais
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-xl px-6 py-8 max-w-2xl">
            <p className="text-lg font-semibold text-foreground mb-4">
              Aprenda diretamente com quem já fez milhares de vezes
            </p>
            <Button 
              variant="gold" 
              size="lg"
              onClick={scrollToOffer}
            >
              Quero aprender com a Dra. Bethânia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
