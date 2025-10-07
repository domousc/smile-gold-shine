import { Shield, CheckCircle } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gold/5 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-card to-background border-2 border-gold/30 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold/30">
                <Shield className="w-10 h-10 text-gold" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Garantia Incondicional de 7 Dias
                </h2>
                <p className="text-xl text-gold font-semibold">
                  100% do seu dinheiro de volta, sem perguntas
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                Você tem <span className="text-foreground font-semibold">7 dias completos</span> para acessar todo o conteúdo, assistir as aulas e aplicar a técnica. Se por qualquer motivo você não ficar satisfeito, basta enviar um e-mail e devolvemos <span className="text-foreground font-semibold">100% do seu investimento</span>. Simples assim.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-4 w-full max-w-2xl">
                {[
                  "Sem burocracia",
                  "Sem perguntas",
                  "Reembolso rápido"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center sm:justify-start">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border w-full">
                <p className="text-sm text-muted-foreground italic">
                  "Se o curso não entregar o que promete, você não paga nada. O risco é todo meu."
                </p>
                <p className="text-xs text-gold font-semibold mt-2">
                  — Dra. Bethânia Luna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;