import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Como se preparar para a declaração do IR 2025",
    excerpt: "Confira as principais mudanças e documentos necessários para declarar seu Imposto de Renda este ano.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    date: "15 Mar 2025",
    category: "Tributário",
  },
  {
    title: "MEI: tudo o que você precisa saber em 2025",
    excerpt: "Limites de faturamento, obrigações e benefícios do Microempreendedor Individual atualizados.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    date: "10 jun 2025",
    category: "Empresarial",
  },
  {
    title: "5 erros comuns na gestão financeira empresarial",
    excerpt: "Evite estes equívocos que podem comprometer a saúde financeira do seu negócio.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    date: "05 Dez 2025",
    category: "Gestão",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="opacity-0 animate-fade-in">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Blog
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Artigos e{" "}
              <span className="text-gradient">Novidades</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="w-fit border-primary/30 hover:border-accent hover:bg-accent/10"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent group/btn"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;