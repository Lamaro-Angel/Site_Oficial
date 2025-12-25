import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais são os serviços inclusos no plano de contabilidade?",
    answer: "Nossos planos incluem escrituração contábil completa, apuração de impostos, folha de pagamento, elaboração de balanços e demonstrativos, além de consultoria tributária. Cada plano é personalizado conforme as necessidades da sua empresa.",
  },
  {
    question: "Como funciona o processo de migração de contador?",
    answer: "A migração é simples e sem custos adicionais. Cuidamos de toda a documentação e comunicação com seu contador anterior. O processo leva em média 15 dias úteis e garantimos continuidade total dos serviços.",
  },
  {
    question: "Vocês atendem empresas de qual porte?",
    answer: "Atendemos desde MEIs e microempresas até empresas de médio e grande porte. Nossos serviços são escaláveis e adaptados à realidade de cada negócio.",
  },
  {
    question: "Qual o prazo para entrega dos relatórios mensais?",
    answer: "Os relatórios gerenciais são entregues até o dia 15 de cada mês, referentes ao mês anterior. Relatórios urgentes podem ser solicitados com prazo de 48 horas.",
  },
  {
    question: "Vocês oferecem consultoria para abertura de empresa?",
    answer: "Sim! Oferecemos consultoria completa para abertura de empresas, incluindo análise do melhor regime tributário, escolha do CNAE adequado, elaboração de contrato social e todo o processo de registro.",
  },
  {
    question: "Como funciona o atendimento e suporte?",
    answer: "Oferecemos atendimento multicanal: WhatsApp, telefone, e-mail e reuniões presenciais ou online. Cada cliente tem um contador responsável dedicado que conhece profundamente seu negócio.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            Perguntas{" "}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-accent/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;