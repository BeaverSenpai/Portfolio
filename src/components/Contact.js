import React from "react";
import "../styles/Contact.css";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    topic: "",
    message: ""
  };

  updateInputValue = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="contactContainer">
        <div className="contactTitle">
          <h2>Contact me</h2>
        </div>
        <form className="contactForm" onSubmit={this.submitForm}>
          <input
            className="contactInput"
            type="email"
            value={this.state.email}
            name="email"
            onChange={this.updateInputValue}
            placeholder="Email"
          ></input>
          <textarea
            className="message"
            type="text"
            value={this.state.message}
            name="message"
            onChange={this.updateInputValue}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
