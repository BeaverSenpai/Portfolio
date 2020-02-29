import React from "react";
import "../styles/Project.css";

class Project extends React.Component {
  state = {
    imageStyles: { transform: "translateX(-100%)" }
  };

  slideImage = () => {
    if (window.pageYOffset > this.props.whenActive) {
      this.setState({
        imageStyles: { transform: "translateX(0%)", transition: "2s" }
      });
    }
  };

  render(props) {
    window.addEventListener("scroll", this.slideImage);
    return (
      <div className="project">
        <div className="projectPhotoContainer">
          <img
            src={this.props.photo}
            alt=""
            className="projectPhoto"
            style={this.state.imageStyles}
          ></img>
        </div>
        <div className="projectInfoContainer">
          <h2 className="projectTitle">{this.props.title}</h2>
          <p className="projectDescribe">{this.props.projectDescribe}</p>
        </div>
      </div>
    );
  }
}

export default Project;
