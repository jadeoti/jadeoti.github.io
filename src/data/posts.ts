export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Building Scalable Microservices with .NET",
    excerpt: "Lessons learned from building distributed systems that handle millions of requests at Microsoft.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Microservices", ".NET", "Architecture"],
    slug: "building-scalable-microservices"
  },
  {
    id: "2",
    title: "Event-Driven Architecture in Practice",
    excerpt: "How we implemented event sourcing and CQRS patterns in a high-traffic fintech application.",
    date: "2023-11-20",
    readTime: "12 min read",
    tags: ["Event Sourcing", "CQRS", "System Design"],
    slug: "event-driven-architecture"
  },
  {
    id: "3",
    title: "From Monolith to Microservices",
    excerpt: "A practical guide to migrating legacy applications to modern distributed architectures.",
    date: "2023-09-05",
    readTime: "10 min read",
    tags: ["Migration", "Microservices", "DevOps"],
    slug: "monolith-to-microservices"
  }
];
