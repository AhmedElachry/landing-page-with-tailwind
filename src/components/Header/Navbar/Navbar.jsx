import { useState } from "react";
import Links from "./Links";
import LinksSm from "./LinksSm";
import close from "../../../assets/close.svg";
import burgerMenu from "../../../assets/burgerMenu.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="container mx-auto  my-9 bg-white max-h-[6.25rem] flex justify-between items-center p-5 relative  rounded-xl w-full ">
      <h1 className="text-primary text-[1.875rem] font-bold">
        <span className="text-secondary">B</span>izpro
      </h1>
      <Links />
      <div className="hidden md:flex gap-[1.5625rem] items-center flex-col md:flex-row font-medium ">
        <p>
          <a>Sign In</a>
        </p>
        <button className="bg-primary text-white h-[3.4375rem] px-[1.875rem] rounded-md ">
          Free Trial
        </button>
      </div>
      <div className=" md:hidden">
        <img
          onClick={() => setToggle(!toggle)}
          src={toggle ? close : burgerMenu}
        />
      </div>
      <LinksSm toggle={toggle} />
    </nav>
  );
}

export default Navbar;
