import imageSlider from "../../assets/imageSlider.svg";
import package1 from "../../assets/package1.png";
import package2 from "../../assets/package2.png";
import package3 from "../../assets/package3.png";
import package4 from "../../assets/package4.png";

const Services = () => {
  return (
    <div className=" mx-auto xl:pl-[135px] bg-section1-bg py-[110px] ">
      <div className="flex justify-center">
        <header className="text-[28px] md:text-[45px] mb-[75px] font-bold text-primary">
          Popular packages
        </header>
        <img className="hidden" src={imageSlider} />
      </div>
      <div className="flex flex-wrap xl:flex-row items-center gap-[50px] justify-center xl:justify-center 2xl:justify-between ">
        <img src={package1} />
        <img src={package2} />
        <img src={package3} />
        <img className="hidden 2xl:block " src={package4} />
      </div>
    </div>
  );
};

export default Services;
