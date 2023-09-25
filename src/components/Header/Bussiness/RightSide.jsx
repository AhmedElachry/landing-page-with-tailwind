import group13 from "../../../assets/group13.svg";
import group33 from "../../../assets/group33.svg";
import search from "../../../assets/search.svg";
import live from "../../../assets/live.svg";
import arrowDown from "../../../assets/arrowDown.svg";
import floatingImg1 from "../../../assets/floatingImg1.svg";
import floatingImg2 from "../../../assets/floatingImg2.svg";
import floatingImg3 from "../../../assets/floatingImg3.svg";
import image56 from "../../../assets/image56.png";
import image57 from "../../../assets/image57.png";
import image51 from "../../../assets/image51.png";
import image52 from "../../../assets/image52.png";
import image53 from "../../../assets/image53.png";

const RightSide = () => {
  return (
    <div className="border sm:border-green-400 border-red-300   xxs:min-h-[400px] xs:min-h-[500px] sm:min-h-[600px] md:max-h-[500px] lg:min-h-[600px] md:mt-[6.8rem] relative   p-[1.25rem] bg-white rounded-2xl shadow-[0_4px_30px_0px_rgba(6,6,64,0.03)] ">
      <img className="w-[3.25rem]" src={group13} />
      <img
        className=" absolute max-w-[8.375rem] top-[-4.7rem] right-[-5.5rem] "
        src={group33}
      />
      <div className=" h-[3.9375rem] w-full p-[0.8125rem] my-[0.94rem]  flex items-center justify-between bg-section1-bg rounded-xl">
        <div className="flex w-[50%] sm:w-[19.5rem] h-[2.3125rem] rounded-md bg-[#DFF3FD] px-[0.7rem]">
          <img className="w-[0.875rem]  " src={search} />
        </div>
        <img className=" rounded-[50%] h-[2.4375rem]" src={image56} />
      </div>
      <div className="relative">
        <div className="absolute flex flex-row bg-[#DFF3FD] rounded-md px-2 justify-between right-0 m-3 font-medium text-primary  ">
          <img className="mr-1" src={live} /> Live
        </div>
        <img className=" rounded-md" src={image57} />
      </div>
      <div className=" flex  pt-[20px] h-[80px] items-center relative ">
        <img
          className="w-9 sm:w-14 rounded-[50%] absolute left-0 border-2 border-white"
          src={image51}
        />
        <img
          className="w-9 sm:w-14 rounded-[50%] absolute translate-x-[25px] sm:translate-x-[40px] border-2 border-white "
          src={image52}
        />
        <img
          className="w-9 sm:w-14 rounded-[50%] absolute translate-x-[50px] sm:translate-x-[80px] border-2 border-white"
          src={image53}
        />
        <p className="text-primary flex items-center bg-white justify-center font-medium w-9 h-9 sm:w-14 sm:h-14 rounded-[50%] absolute translate-x-[75px] sm:translate-x-[120px] shadow-[0_4px_30px_0px_rgba(6,6,64,0.10)] ">
          +3K
        </p>
        <p className=" text-paragraph flex items-center  justify-center  text-xs sm:text-base font-normal sm:font-medium absolute translate-x-[120px] sm:translate-x-[190px] ">
          Watching
        </p>
        <div className="flex absolute right-0 justify-between">
          <p className="text-paragraph text-xs sm:text-base font-normal sm:font-medium pr-1">
            Live chat
          </p>
          <img src={arrowDown} />
        </div>
      </div>
      <div className="flex ">
        <img className="" src={floatingImg1} />
        <img className="" src={floatingImg2} />
        <img className="" src={floatingImg3} />
      </div>
    </div>
  );
};

export default RightSide;
