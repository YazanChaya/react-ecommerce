import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements";

const Navbar = ({ handler }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Yazan</NavLink>
        <NavIcon onClick={handler}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
