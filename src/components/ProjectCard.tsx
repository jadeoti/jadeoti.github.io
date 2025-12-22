import { ExternalLink } from "lucide-react";
import { Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/PhoneMockup";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <article 
      className={`group card-gradient border border-border/50 rounded-lg p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg opacity-0 animate-fade-up stagger-${index + 1}`}
    >
      <div className={`flex flex-col ${hasScreenshots ? 'lg:flex-row lg:gap-12' : ''}`}>
        {/* Content Section */}
        <div className={`flex-1 ${hasScreenshots ? 'lg:order-1' : ''}`}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.role} • {project.period}
              </p>
            </div>
            
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6">
            {project.description}
          </p>
          
          <ul className="space-y-2 mb-6">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Phone Mockup Section */}
        {hasScreenshots && (
          <div className="mt-8 lg:mt-0 lg:order-2 flex justify-center lg:flex-shrink-0">
            <PhoneMockup 
              images={project.screenshots!} 
              alt={project.title} 
            />
          </div>
        )}
      </div>
    </article>
  );
};
