import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Domingos Filipe",
    role: "Diretor Executivo",
    image: "https://scontent.flad8-1.fna.fbcdn.net/v/t39.30808-6/555738106_1306982997639152_124067544831392774_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGZFuH28U87iUPqX6skiz5WeiJPagoaf9N6Ik9qChp_03a61Lswj7qnw2AZr2WIlENEkbkneGTz-j4j1AZZ917t&_nc_ohc=lCN5OIjJ2s4Q7kNvwH2TyBK&_nc_oc=AdmiYezSMK4wNvoVvzCDXNhx5b7W6Vd0UK_5CV3piNocFAk2JmRHpZW6D2GjBlzjQAk&_nc_zt=23&_nc_ht=scontent.flad8-1.fna&_nc_gid=v8mSNfXcOe-F1lel0jcuRA&oh=00_AfmkyzYSNGjYuk8wNni_ZzIng61uPK1JCnoDi1xgWzRPpg&oe=694A5F1A",
    description: "20 anos de experiência em contabilidade empresarial e gestão financeira.",
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
    image: "https://scontent.flad8-2.fna.fbcdn.net/v/t39.30808-6/488860255_1851147609064527_2411932305051796090_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFd0RRYs-12P11S1HEi6KTU7rJb3Wxc-bHuslvdbFz5sW5VqB2Q55nUw7rqEHB6wrbcveYP_S87X5wRCqm-JyKe&_nc_ohc=dvcCuQlOwFYQ7kNvwEphHMA&_nc_oc=AdmVR1XRZ7ppU8g6qsnkD2WUsYCpI7pJlzWjX3oWamauvpqUI3ysvON4qyh5h7WgmVw&_nc_zt=23&_nc_ht=scontent.flad8-2.fna&_nc_gid=bsabyieFNHYlm3t_nUAgNw&oh=00_AfmzWhrUK9T37dRr5Z1Sb5HucwDaTuA1bWvUni2h5TZcQA&oe=694A6FF0",
    description: "Expert em contabilidade gerencial e análise de demonstrativos.",
  },
  {
    name: "Juliana Costa",
    role: "Coord. Departamento Pessoal",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    description: "Especializada em legislação trabalhista e gestão de pessoas.",
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