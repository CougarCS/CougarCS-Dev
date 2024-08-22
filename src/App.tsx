import "./App.css";
import NavBar from "./components/NavBar";
import OfferCards from "./components/OfferCards";
import SectionAnnoucement from "./components/SectionAnnoucement";
import HeroImage from "./sections/HeroImage";

function App() {
  return (
    <div className="m-0">
      <NavBar />
      <div className="m-0">
        <div className="h-16 w-screen bg-red-500"></div>
        <HeroImage />
        <SectionAnnoucement text="hey" color="red" Icon="red" />
        <OfferCards />
      </div>
    </div>
  );
}

export default App;
