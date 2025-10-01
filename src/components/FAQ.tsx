import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Sou recém-formado, consigo acompanhar?",
      answer: "Sim, o curso foi pensado para dentistas de todos os níveis.",
    },
    {
      question: "Vou precisar de materiais caros?",
      answer: "Não. Você aprenderá técnicas com resinas acessíveis.",
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Acesso vitalício.",
    },
    {
      question: "Como será o curso?",
      answer: "O curso é uma aula completa onde a Dra. Bethânia faz ao vivo o procedimento de fechamento de diastema e explica o passo a passo em detalhes.",
    },
    {
      question: "Receberei certificado?",
      answer: "Sim, você terá acesso a um certificado digital de participação.",
    },
    {
      question: "Preciso ter experiência prévia em estética?",
      answer: "Não, o curso é didático e pensado tanto para quem está começando quanto para quem já atua na área.",
    },
    {
      question: "Posso assistir de qualquer lugar?",
      answer: "Sim, basta ter acesso à internet. Você pode assistir do celular, tablet ou computador.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 shadow-elegant hover:shadow-gold transition-smooth"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-gold-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
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
