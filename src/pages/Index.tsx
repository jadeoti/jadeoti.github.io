import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, FileText } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/data/posts";
import { projects } from "@/data/portfolio";

const Index = () => {
  const featuredPosts = posts.slice(0, 2);
  const featuredProject = projects[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/20 animate-scale-in">
              <img
                src="https://avatars.githubusercontent.com/u/11523231?v=4"
                alt="Adedeji Adeoti"
                className="w-full h-full object-cover"
              />
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
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up stagger-2">
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
            
            <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up stagger-3">
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
              <a href="https://www.microsoft.com/en-us/mesh" target="_blank" rel="noopener noreferrer">
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
    </Layout>
  );
};

export default Index;
