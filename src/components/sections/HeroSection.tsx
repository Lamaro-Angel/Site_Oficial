import { ArrowDown, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax bg-gradient-to-br from-primary/10 via-background to-accent/10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Sua parceira em crescimento financeiro
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Blue</span>{" "}
            <span className="text-gradient">Finantial</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Transformamos números em estratégias. Contabilidade moderna, transparente 
            e focada no crescimento do seu negócio.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary/30 hover:bg-primary/5"
            >
              Conhecer Serviços
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg bg-accent/10">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">200+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Clientes Atendidos</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg bg-accent/10">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">05+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg bg-accent/10">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Conformidade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};

export default HeroSection;