import { Layout } from "@/components/Layout";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/data/posts";

const Posts = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 opacity-0 animate-fade-up">
              Posts
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-up stagger-1">
              Articles and thoughts on software engineering, distributed systems, architecture patterns, and lessons learned building at scale.
            </p>
          </div>

          <div className="grid gap-6">
            {posts.map((post, index) => (
              <div 
                key={post.id} 
                className={`opacity-0 animate-fade-up stagger-${Math.min(index + 2, 5)}`}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Posts;
