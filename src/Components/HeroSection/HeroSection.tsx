import Hero from "./Hero/Hero";
import "./heroSection.sass";
import Popular from "./Popular/Popular";

const HeroSection = () => {
  return (
    <section id='hero'>
      <Hero />
      <Popular />
    </section>
  );
};

export default HeroSection;
