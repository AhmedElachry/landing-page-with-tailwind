import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import GlobalCommunication from "./components/Global Communication/GlobalCommunication";
import Header from "./components/Header/Header.jsx";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Proccess from "./components/Proccess/Proccess";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Proccess />
      <About />
      <Services />
      <GlobalCommunication />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
