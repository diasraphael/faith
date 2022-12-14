import React from "react";
import SocialIcon from "./SocialIcon";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="absolute right-8 flex flex-col icon items-center">
      <SocialIcon url="/facebook" iconClasses="fab fa-facebook-f"></SocialIcon>
      <SocialIcon url="/instagram" iconClasses="fab fa-instagram"></SocialIcon>
      <SocialIcon url="/youtube" iconClasses="fab fa-youtube"></SocialIcon>
    </div>
  );
};

export default SocialIcons;
