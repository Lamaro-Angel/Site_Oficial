import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Domingos Filipe",
    role: "Diretor Executivo",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJybd4ZgvPW6DFNfqCTz0ktP_j80Ok-4L8yN5DonIsDbhbehLsu6yg5OE8edsZ8N0AYIt_66kTS60lrJKElDSAdF9WPGhe_=s432-c-no",
    description: "7 anos de experiência em contabilidade empresarial e gestão financeira.",
  },
  {
    name: "Vonique Trovoada",
    role: "Directora administrativa e Financeira",
    image: "https://assets.zyrosite.com/4sbF0yScSrHCjtnj/1-1-caexkQGiMJyueRtQ.jpg",
    description: "Especialista em planejamento tributário e otimização fiscal.",
  },
  {
    name: "Lázaro Filipe",
    role: "Contador Sênior",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKZe0PX_7HV8Z5LXwI4h1WGjJfBtwbx75Fwl49WjurrOCSnlldP=s432-c-no",
    description: "Expert em programação web e automação de serviço.",
  },

];

const TeamSection = () => {
  return (
    <section id="equipe" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nossa Equipe
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            Profissionais{" "}
            <span className="text-gradient">qualificados</span>
          </h2>
          <p className="text-muted-foreground">
            Conheça os especialistas dedicados a cuidar das finanças do seu negócio.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-2 mt-4">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;