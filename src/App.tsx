import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./sections/AboutUs";
import Affiliates from "./sections/Affiliates";
import MobileBranches from "./components/mobile/Branches";
import ClubStats from "./sections/ClubStats";
import HeroImage from "./sections/HeroImage";
import MeetOfficersMobile from "./components/mobile/MeetOfficers";
import WhatWeOffer from "./sections/WhatWeOffer";
import Branches from "./sections/Branches";

function App() {
  return (
    <div className="m-0">
      <NavBar />
      <div className="m-0">
        <HeroImage />
        <ClubStats />
        <AboutUs />
        <WhatWeOffer />
        <Branches />
        <MobileBranches />
        <Affiliates />
        <MeetOfficersMobile />
      </div>
    </div>
  );
}

export default App;
