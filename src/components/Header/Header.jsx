import Navbar from "./Navbar/Navbar.jsx";
import Bussiness from "../../components/Header/Bussiness/Bussiness";

function Header() {
  return (
    <header className="  bg-section1-bg border border-green-600 flex flex-col  ">
      <Navbar />
      <Bussiness />
    </header>
  );
}

export default Header;
