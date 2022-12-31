import React from "react";
import "./NavItem.css";

interface NavItemProps {
  title: string;
  url: string;
}

const NavItem = (props: NavItemProps) => {
  const { title, url } = props;
  return (
    <a className="" href={url}>
      {title}
    </a>
  );
};

export default NavItem;
