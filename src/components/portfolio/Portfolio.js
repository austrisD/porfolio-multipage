import React from "react";
import { works_data } from "./works_data";
import "./Portfolio.scss";
import eclipse from "./ellipse.svg";

const Portfolio = () => {
  const mapData = works_data.map((value, index) => {
    console.log(value.workGroups);
    return (
      <div key={index} className="portfolio__work__group">
        <div className="portfolio__group__name">{value.workGroups}</div>
        <div className="portfolio__works">
          {value.works.map((value, index) => {
            return (
              <div className="portfolio__works_hover_content">
                <p className="work_name">{value.work_name}</p>
                <img key={index} src={value.img} alt={value.work_name} />
              </div>
            );
          })}
        </div>
        <div className="portfolio__work__group_dates">
          <div
            className="circle dates_start"
            style={{ backgroundImage: `url(${eclipse})` }}
        >{value.start}</div>
          <div
            className="circle dates_end"
            style={{ backgroundImage: `url(${eclipse})` }}
        >{value.end}</div>
        </div>
      </div>
    );
  });

  return (
    <div id="portfolio" className="portfolio">
      <h3>Portfolio</h3>

      <div className="portfolio__container">
        <div
          className="portfolio__year"
          style={{ backgroundImage: `url(${eclipse})` }}
        >
          2020
        </div>
        {mapData}
        <div className="portfolio__work__group"></div>
      </div>
    </div>
  );
};

export default Portfolio;
