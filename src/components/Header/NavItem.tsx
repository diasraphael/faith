import React from "react";
import "./NavItem.css";

interface NavItemProps {
  title: string;
  url: string;
}

const NavItem = (props: NavItemProps) => {
  const { title, url } = props;
  return (
    <span className="nav">
      <a
        className="relative text-white text-base font-medium no-underline ml-7"
        href={url}
      >
        {title}
      </a>
    </span>
  );
};

export default NavItem;
