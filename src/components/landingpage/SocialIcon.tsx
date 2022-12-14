import React from "react";
interface SocialIconProps {
  url: string;
  iconClasses: string;
}

const SocialIcon = (props: SocialIconProps) => {
  const { url, iconClasses } = props;
  return (
    <a href={url} className="text-2xl">
      <i className={iconClasses}></i>
    </a>
  );
};

export default SocialIcon;
