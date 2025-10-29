import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MindPeace - Mental Health & Motivation Blog</title>
        <meta
          name="description"
          content="MindPeace is your sanctuary for mental wellness, mindfulness, and motivation. Discover articles on stress management, self-care, and emotional wellbeing."
        />
        <meta
          name="keywords"
          content="mental health, mindfulness, motivation, self-care, meditation, wellness, anxiety relief, stress management, emotional wellbeing"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 px-4 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <div className="container mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Find Your Inner Peace
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto italic">
                "Peace comes from within. Do not seek it without."
              </p>
              <Link to="/blog">
                <Button size="lg" className="text-lg px-8 py-6 hover-scale">
                  Read Blog
                </Button>
              </Link>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-16 px-4 bg-background">
            <div className="container mx-auto max-w-4xl text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Welcome to MindPeace
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At MindPeace, we believe that true happiness begins with mental clarity and inner peace. 
                Our mission is to provide you with practical tools, inspiring stories, and evidence-based 
                strategies to help you navigate life's challenges with grace and positivity. Whether you're 
                seeking stress relief, emotional balance, or simply a moment of calm in your busy day, 
                you'll find a welcoming space here to nurture your mental wellbeing and rediscover joy.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
