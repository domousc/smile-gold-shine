import { Quote } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <Quote className="w-12 h-12 mx-auto mb-4 text-gold" />
          <p className="text-2xl md:text-3xl font-bold">
            Dentistas que aplicaram a técnica já tiveram retorno imediato em seus consultórios.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border"
            >
              <div className="h-32 flex items-center justify-center text-muted-foreground">
                <p className="text-sm italic">Espaço para depoimento</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
