import React, { useState } from "react";
import "./style.scss";
import { Link, Route, Router, Switch } from "react-router-dom";
import Greeting from "./components/Greeting/Greeting";
import { ReactComponent as BurgerMenu } from "./globalAssets/burgerMenu.svg";
import AboutME from "./components/about/About";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  const [GreetingScreen, setGreetingScreen] = useState(true);
  setInterval(() => {
    setGreetingScreen(false);
  }, 3000);

  return (
    <>
      <Greeting />
      <main style={{ display: GreetingScreen === false ? "flex" : "none" }}>
        <nav className="navBar">
          <button>
            <Link to="/About">About</Link>
          </button>
          <div className="burgerMenu">
            <BurgerMenu />
            <button>
              <Link>Skills</Link>
            </button>
            <button>
              <Link>Portfolio</Link>
            </button>
            <button>
              <Link to="/Contacts">Contacts</Link>
            </button>
          </div>
        </nav>
        <section className="MainContainer">
          <Switch>
            <Route path="/About">
              <AboutME />
            </Route>
            <Route path="/Contacts">
              <Contacts />
            </Route>
          </Switch>
        </section>
      </main>
    </>
  );
};

export default App;
