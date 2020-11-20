import React, { useState } from "react";
import "./style.scss";
import { Link, Route, Switch } from "react-router-dom";
import Greeting from "./components/Greeting/Greeting";

const App = () => {
  const [ContentActive, setContentActive] = useState("none");
  setInterval(() => {
    setContentActive("flex");
  }, 3000);
  return (
    <>
      <Greeting />
      <main style={{ display: ContentActive }}>
        <nav className="navBar">
          <button>About</button>
          <button>Skills</button>
          <button>Portfolio</button>
          <button>Contacts</button>
        </nav>
        <section className="MainContainer"></section>
      </main>
    </>
  );
};

export default App;
