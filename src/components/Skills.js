import React from "react";
import "../styles/Skills.css";
import htmlPhoto from "../image/skillsPhotos/html.png";
import cssPhoto from "../image/skillsPhotos/css.png";
import jsPhoto from "../image/skillsPhotos/js.png";
import reactPhoto from "../image/skillsPhotos/react.png";
import rwdPhoto from "../image/skillsPhotos/rwd.png";
import mysqlPhoto from "../image/skillsPhotos/mysql.png";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="skillsTitle">
        <h2>I can work with:</h2>
      </div>
      <div className="skills">
        <div className="skill">
          <img src={htmlPhoto} alt="" style={{ padding: "20px" }}></img>
        </div>
        <div className="skill">
          <img src={cssPhoto} style={{ padding: "20px" }} alt=""></img>
        </div>
        <div className="skill">
          <img src={rwdPhoto} alt=""></img>
        </div>
        <div className="skill" style={{ borderTop: "2px solid white" }}>
          <img src={jsPhoto} alt=""></img>
        </div>
        <div className="skill" style={{ borderTop: "2px solid white" }}>
          <img src={reactPhoto} alt=""></img>
        </div>
        <div
          className="skill"
          style={{ borderTop: "2px solid white", padding: "20px" }}
        >
          <img src={mysqlPhoto} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Skills;
