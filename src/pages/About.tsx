import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About MindPeace - Our Mission for Mental Wellness</title>
        <meta
          name="description"
          content="Learn about MindPeace's mission to help people improve mental well-being through mindfulness, motivation, and compassionate guidance."
        />
        <meta name="keywords" content="mental health mission, mindfulness community, wellness blog, mental health support" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  About MindPeace
                </h1>
                <p className="text-xl text-muted-foreground">
                  Helping you find peace in a chaotic world
                </p>
              </div>

              <div className="flex justify-center mb-12 animate-fade-in">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80"
                    alt="Founder profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 text-lg text-foreground/90 animate-fade-in">
                <p>
                  Welcome to <strong>MindPeace</strong> — a safe space dedicated to mental health, 
                  mindfulness, and motivation. In today's fast-paced world, it's easy to feel overwhelmed, 
                  anxious, or disconnected. Our mission is to provide you with practical tools, 
                  compassionate guidance, and inspiring content to help you navigate life's challenges 
                  with grace and resilience.
                </p>

                <p>
                  MindPeace was born from a personal journey of healing and self-discovery. After 
                  experiencing burnout and anxiety, I discovered the transformative power of mindfulness, 
                  journaling, and intentional living. These practices didn't just help me survive—they 
                  helped me thrive. Now, I'm here to share what I've learned with you.
                </p>

                <p>
                  This blog isn't about quick fixes or toxic positivity. It's about real, sustainable 
                  practices that honor where you are while supporting where you want to go. Whether 
                  you're dealing with stress, seeking better sleep, wanting to build healthier habits, 
                  or simply looking for a moment of peace in your day, you'll find resources here.
                </p>

                <p>
                  We believe that mental health isn't a destination—it's a journey. Some days will be 
                  easier than others, and that's okay. What matters is having the tools, support, and 
                  compassion (especially for yourself) to keep moving forward.
                </p>

                <div className="bg-accent/30 rounded-lg p-8 my-8">
                  <p className="text-xl font-medium text-center italic text-primary">
                    "Peace comes from within. Do not seek it without."
                  </p>
                  <p className="text-center text-muted-foreground mt-2">— Buddha</p>
                </div>

                <p>
                  Thank you for being here. Your presence in this community matters, and your commitment 
                  to your mental health is something to be proud of. Together, let's create more peace, 
                  one mindful moment at a time.
                </p>

                <p className="font-medium">
                  With warmth and gratitude,<br />
                  <span className="text-primary">The MindPeace Team</span>
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
