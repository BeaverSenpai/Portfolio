import React from "react";
import Header from "./Header";
import "../styles/App.css";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}
export default App;
