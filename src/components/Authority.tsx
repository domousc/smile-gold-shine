import draBethania from "@/assets/dra-bethania.jpg";

const Authority = () => {
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
                Referência em odontologia estética com mais de 10 anos de experiência transformando sorrisos através da resina composta.
              </p>
              <p>
                Já realizou centenas de procedimentos de fechamento de diastema com resultados comprovados e pacientes satisfeitos.
              </p>
              <p className="text-foreground font-semibold italic border-l-4 border-gold pl-4">
                "Não é teoria. É prática real de consultório, do jeito que realmente funciona no dia a dia."
              </p>
              <p>
                Minha missão é compartilhar conhecimento técnico aplicável imediatamente, para que você domine a técnica com segurança e lucre com ela.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-3xl" />
              <img
                src={draBethania}
                alt="Dra. Bethânia Luna no consultório"
                className="relative rounded-2xl shadow-gold w-full max-w-md object-cover border border-gold/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
