import "./App.css";
import "@fontsource/manrope";
import HeaderTop from "./Component/Headers/HeaderTop";
import Header from "./Component/Headers/Header";
import Homepage from "./pages/HomePage/Homepage";
import Aboutus from "./Component/HomeBanner/Aboutus";
import Engage from "./Component/HomeBanner/Engage";
import Connect from "./Component/HomeBanner/Connect";
import Farmerscorner from "./Component/Farmerscorner/Farmerscorner";
import Ourproduce from "./Component/Ourproduce/Ourproduce";
import Farmvisit from "./Component/Farmvisit/Farmvisit";
import Workshop from "./Component/Workshop/Workshop";
import Farmcafe from "./Component/Farmcafe/Farmcafe";
import Patnerwithus from "./Component/Patnerwithus/Patnerwithus";
import Careers from "./Component/Careers/Careers";
import Contactus from "./Component/Contactus/Contactus";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/blog" element={<Farmerscorner />} />
        <Route path="/our-produce" element={<Ourproduce />} />
        <Route path="/farm-visit" element={<Farmvisit />} />
        <Route path="/workshops" element={<Workshop />} />
        <Route path="/farm-cafe" element={<Farmcafe />} />
        <Route path="/partner-with-us" element={<Patnerwithus />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
