import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="navBar">
      <NavLink to="./About">About</NavLink>
      <div className="burgerMenu">
        <NavLink to="./Skills">Skills</NavLink>
        <NavLink to="./Portfolio">Portfolio</NavLink>
        <NavLink to="./Contacts">Contacts</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
