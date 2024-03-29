import React from "react";
import Header from "../header/Header";
import Slider from "./Slider";
import SocialIcons from "./SocialIcons";

const LandingSection = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <SocialIcons></SocialIcons>
      <Slider></Slider>
    </div>
  );
};

export default LandingSection;
