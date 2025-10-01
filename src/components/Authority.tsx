import draBethania from "@/assets/dra-bethania.jpg";

const Authority = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gold-light/10 to-background">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={draBethania}
              alt="Dra. Bethânia Luna"
              className="rounded-2xl shadow-elegant w-full"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full">
              <p className="text-sm font-semibold text-gold-dark">
                SOBRE A INSTRUTORA
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl">
              Dra. Bethânia Luna
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Sou a Dra. Bethânia Luna, especialista em odontologia estética. 
              Já transformei centenas de sorrisos com resina composta e agora 
              vou mostrar como você também pode aplicar essa técnica de forma 
              rápida, segura e lucrativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
