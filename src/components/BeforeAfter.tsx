import beforeAfter1 from "@/assets/before-after-1.jpg";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BeforeAfter = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full border border-gold/30 mb-4">
            <p className="text-sm font-semibold text-gold">
              RESULTADOS COMPROVADOS
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Mesma Técnica que Transformou Sorrisos de Famosos
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Dra. Bethânia já realizou milhares de procedimentos estéticos em resina composta, incluindo facetas para personalidades como <span className="text-gold font-semibold">Tiringa e Geyson Palitot</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-smooth" />
            <div className="relative bg-card rounded-2xl border border-gold/20 overflow-hidden hover:border-gold/50 transition-smooth">
              <img
                src={beforeAfter1}
                alt="Transformação de sorriso com facetas em resina - Antes e depois"
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-xs font-semibold text-primary-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Facetas em Resina
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gold/5 border border-gold/20 rounded-xl p-6 max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="text-gold font-semibold">Essas transformações foram feitas com facetas</span>, mas a técnica de fechamento de diastema que você vai aprender no curso usa os <span className="font-semibold">mesmos princípios, materiais e protocolos estéticos</span> que garantem resultados naturais e duradouros.
          </p>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-xl text-foreground font-semibold">
            Você também pode entregar essas transformações
          </p>
          <Button 
            variant="gold" 
            size="xl"
            onClick={scrollToOffer}
          >
            Quero transformar sorrisos assim
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;