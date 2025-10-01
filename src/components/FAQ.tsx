import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como será o curso?",
      answer: "É uma aula completa onde a Dra. Bethânia demonstra ao vivo o procedimento de fechamento de diastema e explica cada etapa em detalhes. Você verá todo o processo do início ao fim, com dicas práticas e orientações para evitar erros comuns.",
    },
    {
      question: "Receberei certificado?",
      answer: "Sim, você terá acesso a um certificado digital de participação que pode ser usado para comprovar sua atualização profissional.",
    },
    {
      question: "Sou recém-formado, consigo acompanhar?",
      answer: "Com certeza! O curso foi pensado para dentistas de todos os níveis. A Dra. Bethânia explica desde os conceitos básicos até a execução prática, de forma didática e acessível.",
    },
    {
      question: "Preciso ter experiência prévia em estética?",
      answer: "Não é necessário. O curso é didático e pensado tanto para quem está começando quanto para quem já atua na área e quer aperfeiçoar a técnica.",
    },
    {
      question: "Vou precisar de materiais ou equipamentos caros?",
      answer: "Não. Você aprenderá técnicas com resinas acessíveis e instrumentais básicos que você já usa no consultório. Não há necessidade de grandes investimentos em equipamentos.",
    },
    {
      question: "Vou conseguir aplicar logo depois da aula?",
      answer: "Sim! O conteúdo é extremamente prático e aplicável imediatamente. Muitos alunos já realizam o procedimento no dia seguinte ao curso com resultados excelentes.",
    },
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "Acesso vitalício. Você pode assistir quantas vezes quiser, quando quiser, sem prazo de expiração.",
    },
    {
      question: "E se eu não tiver tempo agora?",
      answer: "Sem problemas! Como o acesso é vitalício, você pode assistir no seu ritmo, quando tiver disponibilidade. O conteúdo estará sempre disponível para você.",
    },
    {
      question: "Posso assistir de qualquer lugar?",
      answer: "Sim, basta ter acesso à internet. Você pode assistir do celular, tablet ou computador, onde e quando for mais conveniente para você.",
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Pagamento único de R$49. Sem mensalidades, sem taxas escondidas. Você paga uma vez e tem acesso para sempre.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl text-center mb-4 font-bold">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Tire suas dúvidas sobre o curso
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:border-gold/50 transition-smooth"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:text-gold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
