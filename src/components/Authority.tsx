import draBethania from "@/assets/dra-bethania.jpg";

const Authority = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Conheça a Dra. Bethânia Luna
            </h2>
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                Sou a Dra. Bethânia Luna, especialista em odontologia estética com anos de experiência transformando sorrisos.
              </p>
              <p>
                Já transformei centenas de sorrisos com resina composta e agora vou mostrar como você também pode aplicar essa técnica de forma rápida, segura e lucrativa.
              </p>
              <p>
                Minha missão é compartilhar conhecimento prático que realmente funciona no dia a dia do consultório.
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
