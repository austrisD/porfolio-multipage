import React, { useState } from "react";
import "./Nav.scss";
import { ReactComponent as Arrow } from "./arrow.svg";

const Nav = () => {
  const [BtnType, setBtnStatus] = useState("down");

  window.onscroll = () => {
    let screenHeight = window.screen.height;
    let scrollPosition = window.pageYOffset;
    if (screenHeight < scrollPosition + 1) setBtnStatus("home");
    if (screenHeight > scrollPosition + 1) setBtnStatus("down");
  };

  return (
    <div className="navBar">
      <a
        href={BtnType === "down" ? "#about" : "#home"}
        className={`nav__arrowBtn ${
          BtnType === "down" ? "nav__down" : ""
        }`}
      >
        {BtnType === "down" ? <Arrow /> : "Home"}
      </a>
      <nav className="navBar__sticky">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contacts">Contacts</a>
      </nav>
    </div>
  );
};

export default Nav;
