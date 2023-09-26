import aboutRight from "../../assets/aboutRight.png";
import aboutRight2 from "../../assets/aboutRight2.svg";

const RightCard = () => {
  return (
    <div className="relative flex">
      <img className="" src={aboutRight} />
      <img
        className=" absolute right-[-50px] bottom-[30px]"
        src={aboutRight2}
      />
    </div>
  );
};

export default RightCard;
