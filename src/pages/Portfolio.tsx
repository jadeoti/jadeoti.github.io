import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

const Portfolio = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 opacity-0 animate-fade-up">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-up stagger-1">
              A collection of projects I've worked on throughout my career, from building distributed systems at scale to crafting mobile applications.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
