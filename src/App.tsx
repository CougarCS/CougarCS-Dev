import "./App.css";
import NavBar from "./components/NavBar";
import OfferCards from "./components/OfferCard";
import SectionAnnoucement from "./components/SectionAnnoucement";
import AboutUs from "./sections/AboutUs";
import Affiliates from "./sections/Affiliates";
import Branches from "./sections/Branches";
import ClubStats from "./sections/ClubStats";
import HeroImage from "./sections/HeroImage";
import MeetOfficers from "./sections/MeetOfficers";
import WhatWeOffer from "./sections/WhatWeOffer";

function App() {
  return (
    <div className="m-0">
      <NavBar />
      <div className="m-0">
        <div className="h-16 w-screen bg-red-500"></div>
        <HeroImage />
        <ClubStats />
        <AboutUs />
        <WhatWeOffer />
        <Branches />
        <Affiliates />
        <MeetOfficers />
      </div>
    </div>
  );
}

export default App;
