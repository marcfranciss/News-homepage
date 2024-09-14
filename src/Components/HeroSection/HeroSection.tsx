import Hero from "./Hero/Hero";
import "./heroSection.sass";
import News from "./News/News";
import Popular from "./Popular/Popular";

const HeroSection = () => {
  return (
    <section id='hero'>
      <Hero />
      <News />
      <Popular />
    </section>
  );
};

export default HeroSection;
