import group13 from "../../../assets/group13.svg";
import group33 from "../../../assets/group33.svg";
import search from "../../../assets/search.svg";
import live from "../../../assets/live.svg";
import image56 from "../../../assets/image56.png";
import image57 from "../../../assets/image57.png";
import image51 from "../../../assets/image51.png";
import image52 from "../../../assets/image52.png";
import image53 from "../../../assets/image53.png";
const RightSide = () => {
  return (
    <div className="  xxs:min-h-[400px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[500px] min-h-[33.125rem]  md:mt-[6.8rem] relative   p-[1.25rem] bg-white rounded-2xl shadow-[0_4px_30px_0px_rgba(6,6,64,0.03)] ">
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
          <p className="  w-fit"></p>
          <img className="mr-1" src={live} /> Live
        </div>
        <img className=" rounded-md" src={image57} />
      </div>
      <div className="flex mt-[1.25rem] justify-center">
        <img
          className="rounded-[50%] absolute left-[1.25rem] border-2 border-white"
          src={image51}
        />
        <img
          className="rounded-[50%] absolute left-[60px] border-2 border-white "
          src={image52}
        />
        <img
          className="rounded-[50%] absolute left-[100px] border-2 border-white"
          src={image53}
        />
        <p className="text-primary flex items-center bg-white justify-center font-medium w-[58px] h-[58px] rounded-[50%] absolute left-[140px] shadow-[0_4px_30px_0px_rgba(6,6,64,0.10)] ">
          +3K
        </p>
        <p className=" text-paragraph flex items-center bg-white justify-center h-[58px] font-medium absolute left-[220px] ">
          Watching
        </p>
      </div>
      {/* <div className="flex items-center h-[5rem]"></div> */}
    </div>
  );
};

export default RightSide;
