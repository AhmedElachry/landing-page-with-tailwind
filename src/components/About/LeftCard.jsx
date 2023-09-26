import shield from "../../assets/shield.svg";
import rating from "../../assets/rating.svg";
const LeftCard = () => {
  return (
    <div className="flex flex-col items-center lg:items-start md:max-w-[30%] lg:max-w-[40%]">
      <header className="text-[28px] md:text-[45px] font-bold text-primary">
        About us
      </header>
      <p className="text-center lg:text-left text-paragraph">
        No wonder that promotion strategy is one of the most important processes
        in marketing. In fact, it supports your marketing voices to reach your
        target audience, creates interest, and helps you to engage with them.
      </p>
      <div className="my-[40px] flex flex-col ">
        <section className="flex flex-col lg:flex-row gap-6 my-[40px] items-center lg:items-start ">
          <img className="max-w-[60px]" src={shield} />
          <div className="flex flex-col items-center lg:items-start ">
            <header className="text-[20px] text-primary">
              Safe and secured
            </header>
            <p className="text-center lg:text-left max-w-[370px] text-base leading-7 mb-2">
              Safe and secured promotion strategy is one of the most important
              processes in marketing.
            </p>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-6 items-center lg:items-start ">
          <img className="max-w-[60px]" src={rating} />
          <div className="flex flex-col items-center lg:items-start ">
            <header className="text-[20px] text-primary">
              Highly expert team
            </header>
            <p className="text-center lg:text-left max-w-[370px] text-base leading-7 mb-2">
              We supports your marketing voices to reach your target audience,
              creates interest.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeftCard;
