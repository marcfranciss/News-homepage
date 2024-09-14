import "./news.sass";

const newsArr = [
  {
    header: "Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    header: "The Downsides of AI Artistry",
    content:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    header: "Is VC Funding Drying Up?",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
const News = () => {
  return (
    <div className='news-container'>
      <h2 className='heading-m'>New</h2>
      <div className='news-content'>
        {newsArr.map((arr) => {
          return (
            <div key={arr.header} className='news-texts'>
              <h3 className='heading-s'>{arr.header}</h3>
              <p className='text-body'>{arr.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
