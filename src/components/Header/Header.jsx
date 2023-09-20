import Navbar from "./Navbar/Navbar.jsx";
import Bussiness from "../../components/Header/Bussiness/Bussiness";

function Header() {
  return (
    <header className="  h-[2000px] overflow-hidden bg-section1-bg flex flex-col  ">
      <Navbar />
      <Bussiness />
    </header>
  );
}

export default Header;
