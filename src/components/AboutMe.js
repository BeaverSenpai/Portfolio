import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="titleContainer">
        <h3 className="title">About me</h3>
      </div>
      <div className="imageAndInfoContainer">
        <div className="imageContainer">
          <div className="thecard">
            <div className="myImage"></div>
            <div className="theback"></div>
          </div>
        </div>
        <div className="infoContainer">
          <div className="info">
            <p className="myStory">
              Nazywam się Young Pikachu, mam 21 lat. Swoją pasję do komputerów i
              programowania odkryłem dawno. Bardzo lubię zajmować się
              programowaniem. W ostatnim czasie ukończyłem kilka szkoleń, a
              teraz chciałbym sam zająć się tworzeniem stron dla nowo poznanych
              mi ludzi. Chętnie poprę swoją wiedzę otrzymanymi certyfikatami jak
              i wysokiej jakości kodem. Zapraszam serdecznie do kontaktu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
