import React from 'react';
import { NavItemProps } from './NavItem';

const NavItem1 = (props: NavItemProps) => {
  const { title, url } = props;
  return (
    <a className="relative text-white font-medium no-underline" href={url}>
      {title}
    </a>
  );
};

export default NavItem1;
