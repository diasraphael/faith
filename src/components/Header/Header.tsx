import React from "react";
import HomeIcon from "./HomeIcon";
import NavItem from "./NavItem";
import "./Header.css";

const Header = () => {
  return (
    <div className="absolute left-0 top-0 z-50 w-full flex justify-between items-center px-20 xl:py-4 xl:px-52 transition duration-150 ease-in-out">
      <HomeIcon></HomeIcon>
      <div className="hamburger"></div>
      <div className="relative hidden lg:block">
        <NavItem title="Home" url="/home"></NavItem>
        <NavItem title="About us" url="/about"></NavItem>
        <NavItem title="Ministries" url="/ministries"></NavItem>
        <NavItem title="Gallery" url="/gallery"></NavItem>
        <NavItem title="Messages" url="/messages"></NavItem>
        <NavItem title="Contact us" url="/contact"></NavItem>
      </div>
    </div>
  );
};

export default Header;
