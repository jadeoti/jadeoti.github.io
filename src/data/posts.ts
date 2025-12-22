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
    title: "The Multiprocessor Mindset: Safety vs Liveness — A Beginner's Guide",
    excerpt: "An approachable look at safety and liveness properties, why they matter in distributed systems, and how to reason about them early.",
    date: "2025-12-22",
    readTime: "7 min read",
    tags: ["Distributed Systems", "Consistency", "Reliability"],
    slug: "the-multiprocessor-mindset-safety-vs-liveness"
  }
 
];
