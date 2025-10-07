import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const checkoutUrl = "https://pay.hub.la/mZKCdzDrl8jZSoAnwsj8";

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              Enquanto você lê isso, outros dentistas estão faturando
            </span>
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Eles decidiram investir R$49. Você vai ficar para trás?
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button 
            variant="gold" 
            size="xl"
            onClick={() => window.open(checkoutUrl, '_blank')}
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
            Cada dia que passa é dinheiro deixado na mesa. Pacientes que você poderia atender estão indo para outros dentistas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
