import NewsLetterImg from "../../assets/newsLetterImg.png";
import NewsEx1 from "../../assets/newsEx1.svg";
import NewsEx2 from "../../assets/newsEx2.svg";

const NewsLetter = () => {
  return (
    <div className="w-full h-[600px]  overflow-hidden container mx-auto">
      <div className="   w-[90%] h-[90%]  relative pl-[70px]  mx-auto flex justify-between flex-col md:flex-row bg-section1-bg p-[30px] md:p-[60px] rounded-2xl">
        <div className="flex flex-col md:items-start items-center text-center md:text-left">
          <header className="text-[28px] md:text-[45px] font-medium md:font-bold text-primary mb-[20px]">
            Subscribe newsletter
          </header>
          <p className="leading-[28px] lg:max-w-[668px]">
            Businesses generally promote their brand, products, and services by
            identifying audience. No wonder that promotion strategy is one of
            the most important processes in marketing.
          </p>
          <form className="my-[40px] flex  bg-white  py-4 px-6 rounded-md md:w-[600px] justify-between">
            <input
              type="email"
              className=" outline-none"
              placeholder="Enter email address"
            />
            <input
              className="bg-primary rounded-md md:py-[20px]  text-white py-0 px-[30px]"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
        <div className="flex ">
          <img
            className="hidden absolute xl:block right-[-50px] bottom-[-50px] "
            src={NewsEx1}
          />
          <div className="relative">
            <img
              className="absolute hidden xl:block right-[85px] top-[-30px]"
              src={NewsEx2}
            />
            <img className="w-[353px]" src={NewsLetterImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
