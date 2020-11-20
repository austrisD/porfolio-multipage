import React, { useState } from "react";
import lineBG from "../../globalAssets/gradientsLine.svg";
import "./Greeting.scss";

const Greeting = () => {
  const [AddClassName, setAddClassName] = useState('');
  setTimeout(() => {
    setAddClassName("headerTop");
  }, 3000);
  return (
    <header
      className={`greeting ${AddClassName}`}
      style={{ backgroundImage: `url(${lineBG})` }}
    >
      <h1 className="greeting__name">Austris Daugulis</h1>
      <h2 className="greeting__jobTitle">Front-end developer</h2>
    </header>
  );
};

export default Greeting;
