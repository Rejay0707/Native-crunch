import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import IngredientsSection from "../components/about/IngredientsSection";
// import AboutCTA from "../components/about/AboutCTA";

import { useAboutContainer } from "../containers/AboutContainer";

const About = () => {
  const { ingredients } = useAboutContainer();

  return (
    <>
      <Navbar />

      <AboutHero />

      <AboutStory />

      <IngredientsSection ingredients={ingredients} />

      <Footer />
    </>
  );
};

export default About;
