import goodwealthA from "@/assets/goodwealth-a.png";
import goodwealthB from "@/assets/goodwealth-b.png";
import goodwealthC from "@/assets/goodwealth-c.png";
import goodwealthD from "@/assets/goodwealth-d.png";
import goodwealthE from "@/assets/goodwealth-e.png";
import cheftentB from "@/assets/cheftent-b.png";
import cheftentC from "@/assets/cheftent-c.png";
import cheftentD from "@/assets/cheftent-d.png";
import cheftentE from "@/assets/cheftent-e.png";
import cheftentF from "@/assets/cheftent-f.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  role: string;
  technologies: string[];
  links?: { label: string; url: string }[];
  highlights: string[];
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "mesh",
    title: "Microsoft Mesh",
    description: "Mixed reality platform enabling presence and shared experiences across devices.",
    period: "2022 - Present",
    role: "Senior Software Engineer",
    technologies: ["C#", ".NET", "Azure", "Microservices"],
    links: [
      { label: "Learn More", url: "https://www.microsoft.com/en-us/mesh" }
    ],
    highlights: [
      "Building distributed web services for the Mesh platform",
      "Designing scalable backend infrastructure on Azure",
      "Implementing real-time communication systems"
    ]
  },
  {
    id: "quickteller",
    title: "Quickteller Paypoint",
    description: "Payment and financial services platform enabling transactions across Nigeria.",
    period: "2019 - 2022",
    role: "Software Engineer",
    technologies: ["Java", "Spring Boot", "Kubernetes", "PostgreSQL"],
    links: [
      { label: "Visit Site", url: "https://paypoint.quickteller.com/" }
    ],
    highlights: [
      "Developed microservices handling high transaction volumes",
      "Implemented payment processing integrations",
      "Optimized system performance for reliability"
    ]
  },
  {
    id: "goodwealth",
    title: "GoodWealth Android App",
    description: "Personal finance management application helping users track transactions across multiple bank accounts.",
    period: "2016 - 2017",
    role: "Technical Lead",
    technologies: ["Android", "Java", "Firebase", "REST APIs"],
    links: [
      { label: "Install App", url: "https://play.google.com/store/apps/details?id=com.litec.goodwealth" }
    ],
    highlights: [
      "Led overall technical decisions on tools and technology",
      "Converted business requirements into working application",
      "Implemented automatic transaction capture across banks"
    ],
    screenshots: [goodwealthA, goodwealthC, goodwealthE, goodwealthB, goodwealthD]
  },
  {
    id: "cheftent",
    title: "Chef Tent",
    description: "Online food ordering platform connecting kitchens with customers.",
    period: "2016 - 2017",
    role: "Full Stack Developer & Designer",
    technologies: ["Android", "Java EE", "UX/UI Design"],
    links: [
      { label: "Visit Site", url: "http://cheftent.com/" }
    ],
    highlights: [
      "Worked as business analyst, UX/UI designer, and developer",
      "Built Android application and contributed to web service",
      "Designed complete user experience from scratch"
    ],
    screenshots: [cheftentB, cheftentC, cheftentD, cheftentE, cheftentF]
  }
];
