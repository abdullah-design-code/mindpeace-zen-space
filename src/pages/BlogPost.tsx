import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex gap-6 text-muted-foreground mb-6">
              <span className="flex gap-2"><Calendar /> {post.date}</span>
              <span className="flex gap-2"><Clock /> {post.readTime}</span>
            </div>

            <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg mb-8" />

            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

