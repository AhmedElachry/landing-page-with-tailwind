import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Bussiness() {
  return (
    <div className="container  mx-auto flex justify-between md:gap-[5%] flex-col md:flex-row ">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Bussiness;
