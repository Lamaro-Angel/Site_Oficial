import { Calculator, FileText, Users, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Geral",
    description: "Escrituração contábil completa, balanços, demonstrativos e relatórios gerenciais personalizados para sua empresa.",
    features: ["Escrituração contábil", "Balanços e balancetes", "Relatórios gerenciais"],
  },
  {
    icon: FileText,
    title: "Fiscal e Tributário",
    description: "Planejamento tributário estratégico, apuração de impostos e cumprimento de todas as obrigações fiscais.",
    features: ["Planejamento tributário", "Apuração de impostos", "Declarações fiscais"],
  },
  {
    icon: Users,
    title: "Folha de Pagamento",
    description: "Gestão completa de departamento pessoal, folha de pagamento, admissões, rescisões e obrigações trabalhistas.",
    features: ["Folha de pagamento", "Admissões e rescisões", "eSocial e obrigações"],
  },
  {
    icon: Building2,
    title: "Consultoria Empresarial",
    description: "Assessoria estratégica para abertura de empresas, análise de viabilidade e reestruturação societária.",
    features: ["Abertura de empresas", "Análise de viabilidade", "Reestruturação societária"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            Soluções completas para{" "}
            <span className="text-gradient">seu negócio</span>
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma gama completa de serviços contábeis e consultivos 
            para atender todas as necessidades da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="w-fit p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent group/btn"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;