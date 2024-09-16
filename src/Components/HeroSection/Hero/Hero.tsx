import heroImgMobile from "../../../assets/images/image-web-3-mobile.jpg";
import heroImgDesktop from "../../../assets/images/image-web-3-desktop.jpg";
import "./hero.sass";
import News from "../News/News";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-img'>
        <img
          src={heroImgMobile}
          alt=''
          className='hero-img-mobile'
          loading='lazy'
        />
        <img
          src={heroImgDesktop}
          alt=''
          className='hero-img-desktop'
          loading='lazy'
        />
      </div>
      <div className='hero-text-container'>
        <h1 className='heading-l' tabIndex={0}>
          The Bright Future of Web 3.0?
        </h1>
        <div className='hero-text'>
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
      <News />
    </div>
  );
};

export default Hero;
