import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { name: "GitHub", href: "https://github.com/jadeoti", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adeoti/", icon: Linkedin },
  { name: "Email", href: "mailto:adedejadeoti@gmail.com", icon: Mail },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adedeji Adeoti. Built with passion.
          </p>
          
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
