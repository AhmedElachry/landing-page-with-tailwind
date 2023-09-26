import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const About = () => {
  return (
    <div className="container mx-auto overflow-hidden lg:justify-between flex flex-col md:flex-row ">
      <LeftCard />
      <RightCard />
    </div>
  );
};

export default About;
