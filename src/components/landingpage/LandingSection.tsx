import React from "react";
import Header from "../header/Header";
import Slider from "./Slider";
import SocialIcons from "./SocialIcons";

const LandingSection = () => {
  return (
    <div className="min-h-screen">
      {/*  <div className="xl:px-[13rem] xl:py-[6rem] px-20 flex flex-row items-center text-white"> */}
      <Header></Header>
      <SocialIcons></SocialIcons>
      <Slider></Slider>
    </div>
  );
};

export default LandingSection;
