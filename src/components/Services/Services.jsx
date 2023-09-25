import imageSlider from "../../assets/imageSlider.svg";
import package1 from "../../assets/package1.svg";
import package2 from "../../assets/package2.svg";
import package3 from "../../assets/package3.svg";
import package4 from "../../assets/package4.svg";

const Services = () => {
  return (
    <div>
      <div>
        <header>Popular packages</header>
        <img src={imageSlider} />
      </div>
      <div>
        <img src={package1} />
        <img src={package2} />
        <img src={package3} />
        <img src={package4} />
      </div>
      <hr />
    </div>
  );
};

export default Services;
