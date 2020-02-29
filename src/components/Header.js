import React from "react";
import "../styles/Header.css";

const Header = () => {
  const scrollDown = () => {
    let target = 970;
    let step = 1000 / 100;
    let current = 0;
    let interval = setInterval(() => {
      current += step;
      window.scrollTo(0, current);
      if (current >= target) {
        clearInterval(interval);
      }
    }, 1);
  };

  return (
    <div className="header">
      <div className="header-info">
        <h4>
          <span style={{ color: "#E604AF" }}>Hello!</span>, I'm
        </h4>
        <h2>
          Mikołaj <span style={{ color: "#003599" }}>Legutko</span>
        </h2>
        <p>
          I'm
          <span style={{ color: "#E604AF" }}> junior frontend developer</span>.
        </p>

        <div className="buttonContainer">
          <span className="showSkills btn" onClick={scrollDown}>
            Learn more
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
