import React from "react";
import "../styles/Skills.css";
import htmlPhoto from "../image/skillsPhotos/html1.png";
import cssPhoto from "../image/skillsPhotos/css1.png";
import jsPhoto from "../image/skillsPhotos/js1.png";
import reactPhoto from "../image/skillsPhotos/react.png";
import rwdPhoto from "../image/skillsPhotos/rwd1.png";
import mysqlPhoto from "../image/skillsPhotos/mysql.png";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="skillsTitle">
        <h2>I can work with:</h2>
      </div>
      <div className="skills">
        <div className="skill">
          <img src={htmlPhoto} alt=""></img>
        </div>
        <div className="skill">
          <img src={cssPhoto} alt=""></img>
        </div>
        <div className="skill">
          <img src={rwdPhoto} alt=""></img>
        </div>
        <div className="skill">
          <img src={jsPhoto} alt=""></img>
        </div>
        <div className="skill">
          <img src={reactPhoto} alt=""></img>
        </div>
        <div className="skill">
          <img src={mysqlPhoto} style={{ width: "90%" }} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Skills;
