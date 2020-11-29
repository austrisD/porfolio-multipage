import React from "react";
import "./Skills.scss";
import { skills_data as data } from "./skills_data";
import sills__bg from "./Skill__bg.svg";

const Skills = () => {
  const mapSkills = data.map((content, index) => {
    return (
      <div key={index} className={`skills_card`}>
        <div className="card__front">
          <h4 className="skills_name">{content.skill}</h4>
        </div>
        <div className="cards__back">
          <p className="skills_level">
            <span>Level:</span> {content.level}
          </p>
          <ul>
            {content.subSkill.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
            <li>and more</li>
          </ul>
        </div>
      </div>
    );
  });
  return (
    <div
      id="skills"
      className="skills"
      style={{ backgroundImage: `url(${sills__bg})` }}
    >
      <h3>Skills</h3>
      <div className="skills_card_container">{mapSkills}</div>
    </div>
  );
};

export default Skills;
