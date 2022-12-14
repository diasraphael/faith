import React from "react";
import SocialIcons from "./SocialIcons";

const LandingSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white justify-center">
      <div className="xl:px-[13rem] xl:py-[6rem] px-20 flex flex-row items-center">
        <div className="z-30 w-2/4 mt-14">
          <h1 className="text-6xl font-black uppercase tracking-wide mb-10">
            Faith Baptist Church
          </h1>
          <p>
            Faith Baptist Church welcomes everyone irrespective of the language,
            culture, religion. We love God. We are a group of Tamil Christians
            come together to worship Jesus and have fellowship. We would like to
            transform people and their lives by teaching them about Jesus.
          </p>
          <div className="mt-10">
            <a href="/home">Read More</a>
          </div>
        </div>
        <SocialIcons></SocialIcons>
      </div>
    </div>
  );
};

export default LandingSection;
