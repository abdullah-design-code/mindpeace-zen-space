import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>{post.title} | MindPeace Zen Space</title>
        <meta
          name="description"
          content={post.description || "Mindfulness and wellbeing insights."}
        />
        <meta name="keywords" content={post.seo.join(", ")} />
        <link
          rel="canonical"
          href={`https://mindpeace-zen-space.vercel.app/blog/${post.id}`}
        />

        {/* ✅ Open Graph (for social media) */}
        <meta
          property="og:title"
          content={`${post.title} | MindPeace Zen Space`}
        />
        <meta
          property="og:description"
          content={post.description || "Explore mindfulness and self-care blogs."}
        />
        <meta
          property="og:image"
          content={`https://mindpeace-zen-space.vercel.app${post.image}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://mindpeace-zen-space.vercel.app/blog/${post.id}`}
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          <article className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Back Button */}
              <Link to="/blog">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>

              {/* Blog Header */}
              <div className="mb-8 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-8 animate-fade-in">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none animate-fade-in">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 text-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.seo.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      #{tag.replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More Button */}
              <div className="mt-8">
                <Link to="/blog">
                  <Button variant="outline" className="w-full md:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Read More Articles
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;

