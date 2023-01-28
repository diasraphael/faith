import React from 'react';
import './NavItem.css';

export interface NavItemProps {
  title: string;
  url: string;
}

const NavItem = (props: NavItemProps) => {
  const { title, url } = props;
  return (
    <span className="nav">
      <a className="relative text-white font-medium no-underline" href={url}>
        {title}
      </a>
    </span>
  );
};

export default NavItem;
