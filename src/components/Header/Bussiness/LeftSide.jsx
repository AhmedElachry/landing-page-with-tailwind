import ellipse11 from "../../../assets/ellipse11.svg";
import video from "../../../assets/video.png";
import straightQuotes1 from "../../../assets/straightQuotes1.svg";
import star from "../../../assets/star.svg";

const LeftSide = () => {
  return (
    <div>
      <div className="relative ">
        <h2 className="text-primary text-[3.125rem] font-bold md:max-w-[26.4375rem] md:mt-[18.88rem] mt-[10rem] leading-[4.0625rem]">
          Perfect place for your business promotion✌️
        </h2>
        <img
          src={ellipse11}
          className="absolute top-0.5 left-[6.6rem] w-[2.5rem]  "
        />
        <p className="max-w-[25.25rem] text-[0.875rem] mt-[1.25rem] text-third">
          Businesses generally promote their brand, products,
          <br /> and services by identifying audience.
        </p>
      </div>
      <div className="mt-[1.87rem] flex items-center justify-center md:justify-start relative">
        <button className="bg-primary text-white h-[3.75rem] px-[1.875rem] min-w-[9.375rem] rounded-md">
          Get Started
        </button>
        <img src={video}></img>
      </div>
      <div className=" h-[8.5rem] mb-[8.19rem] md:max-w-[26.128rem] bg-white rounded-xl p-3 ">
        <div className="flex justify-between">
          <img src={straightQuotes1} />
          <div className="flex items-center justify-between gap-1 ">
            <img src={star} />
            <p className="text-primary font-medium">4.9</p>
          </div>
        </div>
        <div className="">
          <p className=" text-third max-w-[23.375rem] mt-[rem]   ">
            There’s no shortage of ideas, what’s missing is the will to execute
            them – <span className="font-medium">Seth Godin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
