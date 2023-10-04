import package1 from "../../assets/package1.png";
import package2 from "../../assets/package2.png";
import package3 from "../../assets/package3.png";
import { useRef } from "react";

const Services = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 370;
  return (
    <div className=" mx-auto xl:px-[125px] bg-section1-bg py-[110px] ">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-5 ">
        <header className="text-[28px] text-center p-4  md:text-[45px] font-bold text-primary">
          Popular packages
        </header>
        <div className="bg-white flex justify-between  w-[126px] h-[66px] p-2 rounded-lg">
          <button
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft -= scrollAmount;
            }}
            className="flex justify-center items-center text-paragraph font-semibold duration-500 transition-all w-[50px] h-[50px] p-[13px] text-2xl hover:bg-secondary hover:text-white  rounded-lg"
          >
            &lt;
          </button>
          <button
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft += scrollAmount;
            }}
            className=" flex justify-center items-center text-paragraph font-semibold duration-500 transition-all w-[50px] h-[50px] p-[13px] text-2xl hover:bg-secondary hover:text-white  rounded-lg"
          >
            &gt;
          </button>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex flex-nowrap w-full overflow-hidden scroll-smooth transition-all xl:flex-row items-center gap-[50px]"
      >
        <img className="w-[300px" src={package1} />
        <img className="w-[300px" src={package2} />
        <img className="w-[300px" src={package3} />
        <img className="w-[300px" src={package1} />
        <img className="w-[300px" src={package2} />
        <img className="w-[300px" src={package3} />
      </div>
    </div>
  );
};

export default Services;
