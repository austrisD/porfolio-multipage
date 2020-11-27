import React from "react";
import "./Nav.scss";
import { ReactComponent as Arrow } from "./arrow.svg";

const Nav = () => {
  return (
    <div className="navBar">
      <a href="#home" className="nav__arrowBtn">
        <Arrow />
      </a>
      <nav className="navBar__sticky">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">
          Portfolio
        </a>
        <a href="#contacts">Contacts</a>
      </nav>
    </div>
  );
};

export default Nav;
