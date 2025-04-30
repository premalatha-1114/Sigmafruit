import React from "react";
import Banner from "../../Component/HomeBanner/Banner";
import Aboutus from "../../Component/HomeBanner/Aboutus";
import Statistics from "../../Component/HomeBanner/Statistics";
import OurProduce from "../../Component/Ourproduce/Ourproduce";

function Homepage() {
  return (
    <div>
      <Banner />
      <Aboutus />
      <Statistics />
      <OurProduce />
    </div>
  );
}

export default Homepage;
