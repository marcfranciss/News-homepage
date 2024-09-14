import heroImg from "../../../assets/images/image-web-3-mobile.jpg";
import "./hero.sass";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-img'>
        <img src={heroImg} alt='' loading='lazy' />
      </div>
      <div className='hero-text'>
        <h1 className='heading-l' tabIndex={0}>
          The Bright Future of Web 3.0?
        </h1>
        <p className='text-body' tabIndex={0}>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button type='button' className='read-more' aria-label='Read more'>
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default Hero;
