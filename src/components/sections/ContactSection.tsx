import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Endereço", value: "Luanda, Distrito Urbano de Neves Bendinha, Bairro Popular, Rua do Cemitério Santana" },
  { icon: Phone, label: "Telefone", value: "(+244) 939 400 944/ 928 282 656" },
  { icon: Mail, label: "E-mail", value: "geral.bluefinantial@gmail.com" },
  { icon: Clock, label: "Horário", value: "Seg - Sex: 8h às 18h" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            Fale{" "}
            <span className="text-gradient">Conosco</span>
          </h2>
          <p className="text-muted-foreground">
            Estamos prontos para atender você. Entre em contato e descubra como 
            podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7884.922071330791!2d13.260219066622632!3d-8.83659554157851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sao!4v1766106647035!5m2!1spt-PT!2sao" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Blue Financial"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Envie sua mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                  <Input
                    type="tel"
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <Textarea
                  placeholder="Sua mensagem"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-border focus:border-accent resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;