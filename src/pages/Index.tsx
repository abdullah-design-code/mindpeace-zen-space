import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-12 px-4 container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-8">Welcome to MindPeace</h1>
          <p className="mb-12">Explore mindfulness, mental health, and self-care guides.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
