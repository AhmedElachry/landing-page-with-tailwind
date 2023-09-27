import NewsLetterImg from "../../assets/newsLetterImg.png";
import NewsEx1 from "../../assets/newsEx1.svg";
import NewsEx2 from "../../assets/newsEx2.svg";

const NewsLetter = () => {
  return (
    <div className=" container mb-[70px] sm:max-h-[400px]  relative p-[30px] pb-0 lg:pt-[60px] lg:pl-[60px]  mx-auto flex justify-between flex-col lg:flex-row bg-section1-bg   rounded-2xl">
      <div className="flex flex-col items-center text-center md:items-start  md:text-left">
        <header className=" w-full text-[28px] md:text-[45px] font-medium md:font-bold text-primary mb-[20px]">
          Subscribe newsletter
        </header>
        <p className="leading-[28px] lg:max-w-[668px]">
          Businesses generally promote their brand, products, and services by
          identifying audience. No wonder that promotion strategy is one of the
          most important processes in marketing.
        </p>
        <div className="">
          <form className="mb-[60px] mt-[40px] flex w-full bg-white   py-4 px-5  rounded-md sm:w-[550px] justify-between">
            <input
              className=" outline-none w-auto md:max-w-[180px] "
              type="email"
              placeholder="Enter email address"
            />
            <input
              className="bg-primary rounded-md sm:py-[20px]   text-white py-0 px-[15px] sm:px-[30px]"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
      <div className="flex relative  min-w-[353px] ">
        <img
          className="hidden absolute xl:block right-[-80px] bottom-[-50px] "
          src={NewsEx1}
        />
        <div className=" ">
          <img
            className="absolute hidden xl:block right-[85px] top-[-130px]"
            src={NewsEx2}
          />
          <img
            className=" absolute bottom-0 hidden lg:block"
            src={NewsLetterImg}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
