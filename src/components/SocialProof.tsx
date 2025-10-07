import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProof = () => {
  const checkoutUrl = "https://pay.hub.la/mZKCdzDrl8jZSoAnwsj8";

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <Quote className="w-12 h-12 mx-auto mb-4 text-gold" />
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Dentistas que aplicaram a técnica já tiveram retorno imediato
          </p>
          <p className="text-base text-muted-foreground">
            Veja o que profissionais estão dizendo sobre o curso
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              text: "Em menos de uma semana já recuperei o valor investido. Fiz 3 fechamentos de diastema e os pacientes ficaram encantados com o resultado!",
              author: "Dr. Rafael Oliveira"
            },
            {
              text: "Nunca mais perdi um paciente que pediu estética. Agora sei como entregar com confiança e ainda cobrar o preço justo pelo meu trabalho.",
              author: "Dra. Mariana Santos"
            },
            {
              text: "O curso é extremamente prático. No dia seguinte já apliquei a técnica e o resultado ficou perfeito. Vale muito a pena!",
              author: "Dr. Fernando Costa"
            },
            {
              text: "Finalmente me sinto seguro para oferecer procedimentos estéticos. A explicação da Dra. Bethânia é clara e sem enrolação.",
              author: "Dra. Juliana Alves"
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-gold/50 transition-smooth"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-gold/50" />
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-xs text-gold font-semibold">
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-lg text-foreground font-semibold">
            Junte-se aos dentistas que já estão faturando mais
          </p>
          <Button 
            variant="gold" 
            size="lg"
            onClick={() => window.open(checkoutUrl, '_blank')}
          >
            Garantir minha vaga agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
