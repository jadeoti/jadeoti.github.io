import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Sparkles,
  Award,
  ShieldCheck,
  Quote,
  Mail,
  Rocket,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/data/posts";
import { projects } from "@/data/portfolio";
import avatar from "@/assets/avatar.jpg";

const Index = () => {
  const featuredPosts = posts.slice(0, 2);
  const featuredProject = projects[0];

  const highlights = [

  ];

  const stats = [
    { label: "Years of experience", value: "10+" },
    { label: "Systems shipped", value: "15+" },
    { label: "Teams partnered", value: "7" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="container mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="max-w-3xl mx-auto text-center lg:text-left">
            <div className="w-28 h-28 md:w-32 md:h-32 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden ring-4 ring-primary/20 animate-scale-in">
              <img src={avatar} alt="Adedeji Adeoti" className="w-full h-full object-cover" />
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 opacity-0 animate-fade-up">
              Hi, I'm <span className="gradient-text">Adedeji</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-fade-up stagger-1">
              Senior Software Engineer at{" "}
              <a 
                href="https://www.microsoft.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Microsoft
              </a>
              {" "}• Lagos, Nigeria
            </p>
            
            <p className="text-muted-foreground mb-8 max-w-2xl opacity-0 animate-fade-up stagger-2">
              I build distributed web services. Currently working on{" "}
              <a 
                href="https://www.microsoft.com/en-us/mesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Microsoft Mesh
              </a>
              . Passionate about scalable systems, clean architecture, and sharing knowledge.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-up stagger-3">
              <Button asChild size="lg" className="gap-2">
                <Link to="/portfolio">
                  <Briefcase className="w-4 h-4" />
                  View Portfolio
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/posts">
                  <FileText className="w-4 h-4" />
                  Read Posts
                </Link>
              </Button>
            </div>
          </div>

          <div className="card-gradient border border-border/50 rounded-2xl p-6 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <Rocket className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Impact snapshot</p>
                <p className="text-lg font-semibold text-foreground">Shipping resilient systems and teams</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border/50 bg-background/60 px-4 py-3 text-center">
                  <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/60 px-4 py-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-2">
                Featured Work
              </h2>
              <p className="text-muted-foreground">
                Currently building at scale
              </p>
            </div>
            <Button asChild variant="ghost" className="gap-2 hidden md:flex">
              <Link to="/portfolio">
                View all projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="card-gradient border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {featuredProject.role} • {featuredProject.period}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              {featuredProject.description}
            </p>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href="https://portal.azure.com/#view/Microsoft_AAD_DXP/DiagnosticsHome.ReactView" target="_blank" rel="noopener noreferrer">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="mt-8 md:hidden">
            <Button asChild variant="ghost" className="gap-2 w-full">
              <Link to="/portfolio">
                View all projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-2">
                Recent Posts
              </h2>
              <p className="text-muted-foreground">
                Thoughts on engineering & architecture
              </p>
            </div>
            <Button asChild variant="ghost" className="gap-2 hidden md:flex">
              <Link to="/posts">
                View all posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
            <Button asChild variant="ghost" className="gap-2 w-full">
              <Link to="/posts">
                View all posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="card-gradient border border-border/50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lg">
            <div className="space-y-2 max-w-2xl">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">Stay in the loop</p>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">Monthly notes on shipping resilient systems</h3>
              <p className="text-muted-foreground">
                A concise update on architecture patterns, distributed systems lessons, and leadership notes. No spam.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
              <Button asChild size="lg" className="gap-2 w-full md:w-auto">
                <a href="mailto:adedejadeoti@gmail.com?subject=Subscribe%20to%20engineering%20notes">
                  <Mail className="w-4 h-4" />
                  Get the newsletter
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full md:w-auto">
                <Link to="/posts">
                  Browse posts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
