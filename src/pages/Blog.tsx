import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Mental Health Blog - MindPeace | Articles on Wellness & Mindfulness</title>
        <meta
          name="description"
          content="Explore our mental health blog featuring articles on mindfulness, stress management, anxiety relief, sleep, gratitude, and emotional wellbeing."
        />
        <meta
          name="keywords"
          content="mental health blog, mindfulness, meditation, anxiety relief, stress management, emotional wellness, self-care, gratitude"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Mental Health Blog
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover insights, strategies, and inspiration for your mental wellness journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
