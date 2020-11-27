import React from "react";
import "./style.scss";
import Nav from "./components/navBar/Nav";
/*****************************************/
import Greeting from "./components/Greeting/Greeting";
import AboutME from "./components/about/About";
import Contacts from "./components/Contacts/Contacts";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";


// window.addEventListener('scroll',(event)=>{
//   console.log(event.pageYOffset);
//   console.log(window.pageYOffset+'windows');

// })

const App = () => {
  return (
    <>
      <Greeting />
      <main>
        <Nav />
        <section className="MainContainer">
          <AboutME />
          <Skills />
          <Portfolio />
          <Contacts />
        </section>
      </main>
    </>
  );
};

export default App;
