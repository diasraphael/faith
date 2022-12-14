import React from "react";
import "./NavItem.css";

interface NavItemProps {
  title: string;
  url: string;
}

const NavItem = (props: NavItemProps) => {
  const { title, url } = props;
  return (
    <a
      className="relative text-black text-base font-medium no-underline m-8 ml-5 before:content-[''] before:absolute before:bg-black before:w-0 before:h-1  before:-bottom-1 before:left-0 hover:before:w-full]"
      href={url}
    >
      {title}
    </a>
  );
};

export default NavItem;
