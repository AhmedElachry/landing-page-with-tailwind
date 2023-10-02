// import imageSlider from "../../assets/imageSlider.svg";
import package1 from "../../assets/package1.png";
import package2 from "../../assets/package2.png";
import package3 from "../../assets/package3.png";
import package4 from "../../assets/package4.png";
import { useRef } from "react";

const Services = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 420;
  return (
    <div className=" mx-auto xl:px-[125px] bg-section1-bg py-[110px] ">
      <div className="flex items-center justify-between ">
        <header className="text-[28px] text-center  md:text-[45px] mb-[75px] font-bold text-primary">
          Popular packages
        </header>
        {/* <img className="hidden lg:block   " src={imageSlider} /> */}
        <div className="bg-white flex justify-between  w-[126px] h-[66px] p-2 rounded-lg">
          <button
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft -= scrollAmount;
              // console.log(container.scrollLeft, container.scrollWidth);
              // if (container < 420) {
              // }
            }}
            className="flex justify-center items-center text-paragraph font-semibold duration-500 transition-all w-[50px] h-[50px] p-[13px] text-2xl hover:bg-secondary hover:text-white  rounded-lg"
          >
            &lt;
          </button>
          <button
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft += scrollAmount;
              //   const scrollWidth = container.scrollWidth;
              //   const scrollLeft = container.scrollLeft;

              //   const VIEW = 370 * 3 + 150;
              //   const LEFT_SIZE = scrollWidth - (scrollLeft + VIEW);
              //   if (LEFT_SIZE < 370) {
              //     container.scrollLeft = scrollWidth;
              //   }

              //   console.log(scrollWidth - (scrollLeft + VIEW));
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
        <img src={package1} />
        <img src={package2} />
        <img src={package3} />
        <img src={package1} />
        <img src={package2} />
        <img src={package3} />
        <img src={package1} />
        <img src={package2} />
        <img src={package3} />
        <img src={package1} />
        <img src={package2} />
        <img src={package3} />
        <img src={package1} />
        <img src={package2} />
        <img src={package3} />
        <img src={package3} />
        <img src={package1} />
        <img src={package2} />
        <img src={package3} />
        <img src={package3} />
        <img src={package3} />
        <img className="hidden 2xl:block " src={package4} />
      </div>
    </div>
  );
};

export default Services;
