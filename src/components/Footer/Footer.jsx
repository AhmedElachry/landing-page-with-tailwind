import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedIn from "../../assets/linkedIn.png";

const Footer = () => {
  return (
    <div className="text-center ">
      <div className="flex flex-col md:flex-row md:px-[120px] md:justify-between gap-6 md:items-start  items-center text-center md:text-left p-8  bg-primary">
        <div className="flex flex-col items-center md:items-start ">
          <h1 className=" text-white text-[1.875rem] font-bold">
            <span className="text-secondary">B</span>izpro
          </h1>
          <p className="text-paragraph max-w-[350px] my-4">
            This is a big one and i consider it one of the most important things
            for a business.
          </p>
          <div className="flex gap-2 mb-4 ">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={linkedIn} />
          </div>
        </div>
        <div>
          <header className="text-white">Quick Links</header>
          <ul className="text-paragraph mb-4">
            <li>Home</li>
            <li>About</li>
            <li>Appointment</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <header className="text-white">Company</header>
          <ul className="text-paragraph mb-4">
            <li>About</li>
            <li>Contacy</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <header className="text-white">Information</header>
          <ul className="text-paragraph mb-4">
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="text-white min-h-[80px] flex  flex-col md:px-[120px] md:justify-between md:items-center md:flex-row  gap-3 bg-black w-full">
        <p>
          Copyright © 2023 <span className="text-secondary">B</span>izpro
        </p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
