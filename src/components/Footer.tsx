import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "Sobre Nós", href: "#sobre" },
      { name: "Nossa Equipe", href: "#equipe" },
      { name: "Carreiras", href: "#" },
      { name: "Blog", href: "#blog" },
    ],
    services: [
      { name: "Contabilidade", href: "#servicos" },
      { name: "Fiscal e Tributário", href: "#servicos" },
      { name: "Folha de Pagamento", href: "#servicos" },
      { name: "Consultoria", href: "#servicos" },
    ],
    support: [
      { name: "FAQ", href: "#faq" },
      { name: "Contato", href: "#contato" },
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Uso", href: "#" },
    ],
  };

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61571242842929&__cft__[0]=AZZqKjMKrH1U1Rpgw9tno-PJUUpsNCpba2JAxwQ-0vGi5xa6HSj6K3rGzvg-twAWvCKBgXfvVIUJW2msiIxwV-qkfhz2dEYAvPfRkjTpvEgJOaCOrnXjUScsIIP-brrrS82z5Jgqbo1v_FHAfWeGN41rjbycZuFnMroPx3V6EbNwn60rNwsgNed1Lo__G_N9qLm4wvzKtP6Au4ufPDWFYr1GWkrmwXeilPd3fUu7OeBZxw&__tn__=-]K-R", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/blue_finantial/?e=d88543da-d25d-491a-88b7-c79283d02307&g=5", label: "Instagram" },
    { icon: Linkedin, href: "www.linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@suaconfian%C3%A7a", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">BF</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Blue Finantial
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Transformamos a gestão financeira do seu negócio com soluções 
              contábeis modernas, transparentes e focadas em resultados.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Blue Finantial. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;