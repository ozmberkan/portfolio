import React from "react";
import About from "~/components/About/About";
import Footer from "~/components/Footer/Footer";
import Hero from "~/components/Hero/Hero";
import MarqueeSection from "~/components/MarqueeSection/MarqueeSection";
import Projects from "~/components/Projects/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <MarqueeSection />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
