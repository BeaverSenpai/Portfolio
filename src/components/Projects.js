import React from "react";
import "../styles/Projects.css";
import Project from "./Project";
import FitAppPhoto from "../image/projectsPhotos/fitapp2.PNG";
import lolApp from "../image/projectsPhotos/lolApp.PNG";
import calculatorPhoto from "../image/projectsPhotos/calculator.PNG";
import chatPhoto from "../image/projectsPhotos/chat.PNG";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="projectsTitle">
        <h2>My work:</h2>
      </div>
      <Project
        title="Fit App"
        photo={FitAppPhoto}
        whenActive={1200}
        projectDescribe="Application supporting training made in JavaScript (React) - counts
          BMI, caloric demand and allows user to track progress of his
          trainings history."
      />
      <Project
        title="League of Legends App"
        photo={lolApp}
        whenActive={1600}
        projectDescribe="App allows user to find actual game and present skill level of players"
      />
      <Project
        title="Chat"
        photo={chatPhoto}
        whenActive={2000}
        projectDescribe="App allows you to talk with yourself so you can pretend you have friends"
      />
      <Project
        title="Calculator"
        photo={calculatorPhoto}
        whenActive={2350}
        projectDescribe="Simple calculator for basic equations 2+2 is 4 minus 1 that’s 3 quick maths"
      />
    </div>
  );
};

export default Projects;
