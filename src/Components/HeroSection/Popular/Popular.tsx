import "./popular.sass";
import retroImg from "../../../assets/images/image-retro-pcs.jpg";
import topLaptop from "../../../assets/images/image-top-laptops.jpg";
import gamingGrowth from "../../../assets/images/image-gaming-growth.jpg";

const popularArr = [
  {
    image: retroImg,
    number: "01",
    header: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
  },
  {
    image: topLaptop,
    number: "02",
    header: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
  },
  {
    image: gamingGrowth,
    number: "03",
    header: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
  },
];
const Popular = () => {
  return (
    <div className='popular-container'>
      {popularArr.map((arr, index) => {
        return (
          <div className='popular-card' key={arr.header}>
            <div className='popular-img'>
              <img src={arr.image} alt='' />
            </div>
            <div className='popular-texts'>
              <span
                className='heading-m'
                id='popular'
                aria-label={`${index + 1} of ${popularArr.length}`}>
                {arr.number}
              </span>
              <h3 className='heading-xs'>{arr.header}</h3>
              <p className='text-body'>{arr.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
