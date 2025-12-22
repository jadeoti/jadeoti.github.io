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
    id: "ihx",
    title: "Identity Diagnostics Platform",
    description: "Platform for diagnosing and resolving identity issues across Microsoft's cloud services.",
    period: "2025 - Present",
    role: "Tech Lead",
    technologies: ["C#", ".NET", "Azure", "Microservices", "AutoPilot", "Cosmos DB"],
    links: [
      { label: "Learn More", url: "https://portal.azure.com/#view/Microsoft_AAD_DXP/DiagnosticsHome.ReactView" }
    ],
    highlights: [
      "Building Web Services and tools for identity diagnostics",
      "Gen AI integration for insight generation and issue resolution",
    ]
  },
  {
    id: "mesh",
    title: "Microsoft Mesh",
    description: "Mixed reality platform enabling presence and shared experiences across devices.",
    period: "2022 - 2024",
    role: "Engineering Manager",
    technologies: ["C#", ".NET", "Azure", "Microservices"],
    links: [
      { label: "Learn More", url: "https://www.microsoft.com/en-us/mesh" }
    ],
    highlights: [
      "Building distributed web services for the Mesh platform",
      "Designing scalable backend infrastructure templates to serve multiple teams on Azure",
      "Implementing real-time communication systems"
    ]
  },
  {
    id: "aoa",
    title: "Azure Object Anchors",
    description: "Mixed reality service that uses AI to recognize real-world objects and create corresponding 3D models for immersive experiences.",
    period: "2021 - 2022",
    role: "Engineering Manager",
    technologies: ["C#", ".NET", "Azure", "Microservices", "Kubernetes", "Cosmos DB"],
    links: [
      { label: "Learn More", url: "" }
    ],
    highlights: [
      "Scaling distributed web services for real-time object recognition",
    ]
  },
  {
    id: "quickteller",
    title: "Quickteller Paypoint",
    description: "Payment and financial services platform enabling transactions across Nigeria.",
    period: "2018 - 2021",
    role: "Senior Software Engineer",
    technologies: ["Java", "Spring Boot", "Kubernetes", "Sql Server", "RabbitMQ", "MongoDB", "Camel", "Redis"],
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
