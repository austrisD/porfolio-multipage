import React, { useState } from "react";
import "./style.scss";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Nav from "./components/navBar/Nav";
/*****************************************/
import Greeting from "./components/Greeting/Greeting";
import AboutME from "./components/about/About";
import Contacts from "./components/Contacts/Contacts";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

const App = () => {
  const [GreetingScreen, setGreetingScreen] = useState(true);
  setInterval(() => {
    setGreetingScreen(false);
  }, 3000);

  return (
    <>
      <BrowserRouter>
        <Greeting />
        <main style={{ display: GreetingScreen === false ? "flex" : "none" }}>
          <Nav />
          <section className="MainContainer">
            <Switch>
              <Route path="/About">
                <AboutME />
              </Route>

              <Route path="/Contacts">
                <Contacts />
              </Route>

              <Route path="/Portfolio">
                <Portfolio />
              </Route>

              <Route path="/Skills">
                <Skills />
              </Route>

            </Switch>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
