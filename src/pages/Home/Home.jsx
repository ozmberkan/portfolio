import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "~/components/About/About";
import Footer from "~/components/Footer/Footer";
import Hero from "~/components/Hero/Hero";
import MarqueeSection from "~/components/MarqueeSection/MarqueeSection";
import Projects from "~/components/Projects/Projects";
import { getAllMyProjects } from "~/redux/slices/projectsSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMyProjects());
  }, [dispatch]);
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
