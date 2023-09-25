import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
// import RightSide from "./RightSide";

function Bussiness() {
  return (
    <div className="container h-auto md:h-[100vh]  mx-auto flex justify-center items-end">
      <div className="flex justify-center md:justify-between flex-col md:flex-row w-full ">
        <LeftCard />
        {/* <RightSide /> */}
        <RightCard />
      </div>
    </div>
  );
}

export default Bussiness;
