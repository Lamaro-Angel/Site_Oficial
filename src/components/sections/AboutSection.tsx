import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const values = [
    { icon: Target, title: "Missão", description: "Oferecer soluções contábeis de excelência que impulsionam o crescimento dos nossos clientes." },
    { icon: Eye, title: "Visão", description: "Ser referência em contabilidade moderna e consultiva no mercado Angolano." },
    { icon: Heart, title: "Valores", description: "Ética, transparência, inovação e compromisso com resultados." },
  ];

  const highlights = [
    "Atendimento personalizado e humanizado",
    "Tecnologia de ponta em processos contábeis",
    "Equipe altamente qualificada e atualizada",
    "Suporte contínuo e consultoria proativa",
  ];

  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
              Sua parceira estratégica em{" "}
              <span className="text-gradient">gestão financeira</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A Blue Finantial nasceu com o propósito de transformar a relação entre 
              empresas e a contabilidade. Com mais de 15 anos de experiência, entregamos 
              muito mais que números – oferecemos insights estratégicos que fazem a diferença 
              no seu negócio.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe combina conhecimento técnico profundo com uma abordagem moderna 
              e tecnológica, garantindo agilidade, precisão e conformidade em todos os processos.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Values Cards */}
          <div className="grid gap-4 opacity-0 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;