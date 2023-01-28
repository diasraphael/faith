import React from 'react';
import SocialIcon from './SocialIcon';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <SocialIcon
        url="https://www.facebook.com/people/Faith-Baptist-Church-Oslo/100064680607767/"
        iconClasses="fab fa-facebook-f"
      ></SocialIcon>
      <SocialIcon
        url="https://www.instagram.com/faithbaptistchurchoslo/"
        iconClasses="fab fa-instagram"
      ></SocialIcon>
      <SocialIcon
        url="https://www.youtube.com/@Tamilbaptistchurch"
        iconClasses="fab fa-youtube"
      ></SocialIcon>
    </div>
  );
};

export default SocialIcons;
