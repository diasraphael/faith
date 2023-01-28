import React from 'react';
import HomeIcon from './HomeIcon';
import NavItem from './NavItem';
import './../../style/base.scss';
import './Header.scss';

const Header = () => {
  return (
    <div className="header space-outer">
      <HomeIcon></HomeIcon>
      <div className="hamburger"></div>
      <div className="relative nav">
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
