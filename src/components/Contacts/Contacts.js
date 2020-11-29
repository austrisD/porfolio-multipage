import React from "react";
import "./Contacts.scss";
import contact__bg from "./contacts__bg.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Github } from "./github.svg";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="Contacts"
      style={{ backgroundImage: `url(${contact__bg})` }}
    >
      <h3>Contacts</h3>
      <div className="contacts__social__media">
        <a href="https://www.facebook.com/austris.daugulis">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/in/austris-daugulis-2646181b1/">
          <Linkedin />
        </a>
        <a href="https://github.com/austrisD">
          <Github />
        </a>
      </div>
      <p>
        <span>Email: </span>austris.daugulis@gmail.com
      </p>
    </div>
  );
};

export default Contacts;
