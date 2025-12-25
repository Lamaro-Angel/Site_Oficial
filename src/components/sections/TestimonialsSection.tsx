import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Marcelo Oliveira",
    company: "Tech Solutions Ltda",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "A Blue Finantial transformou a gestão financeira da nossa empresa. O atendimento é excepcional e os relatórios gerenciais nos ajudam a tomar decisões muito mais assertivas.",
  },
  {
    name: "Fernanda Lima",
    company: "Boutique Fashion",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
    text: "Profissionais extremamente competentes e sempre disponíveis. O planejamento tributário que fizeram economizou muito dinheiro para minha empresa.",
  },
  {
    name: "Ricardo Almeida",
    company: "Construtora Almeida",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    text: "Trabalho com a Blue Finantial há 3 anos e nunca tive problemas. Confiança total na equipe e nos serviços prestados. Recomendo a todos!",
  },
  {
    name: "Patricia Santos",
    company: "Clínica Odontológica PS",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    text: "A migração para a Blue Finantial foi a melhor decisão que tomei. Processos organizados, comunicação clara e resultados excelentes.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            O que nossos clientes{" "}
            <span className="text-gradient">dizem</span>
          </h2>
          <p className="text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent/10" />

            {/* Testimonial Card */}
            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 text-center transition-all duration-500">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 border-4 border-accent/20"
              />

              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>

              <h4 className="font-display text-lg font-semibold text-foreground">
                {testimonials[current].name}
              </h4>
              <p className="text-accent text-sm">{testimonials[current].company}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border hover:border-accent hover:bg-accent/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === current ? "bg-accent w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border hover:border-accent hover:bg-accent/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;