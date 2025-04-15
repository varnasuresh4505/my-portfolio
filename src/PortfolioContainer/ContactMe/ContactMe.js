import React from "react";
import "./ContactMe.css";
import emailjs from "emailjs-com";

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_595mmqy",
        "template_31cl61k",
        e.target,
        "7ItTF09guLPAW887x"
      )
      .then(
        (result) => {
          alert("Message sent!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message. Try again!");
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="contact-container" id="contactme">
      <h2 className="section-title">Contact Me</h2>
      <hr className="hr" />
      <p className="section-subtitle">Let's keep in touch</p>

      <div className="background-black">
        <div className="heading">
          <h1>Get In Touch...</h1>
        </div>
        <div className="colz-icon">
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>

        <div className="texts"></div>

        <div className="mailz">
          <p>Ping Me</p>
          <div className="call-img">
            <img
              src={require("../../assets/Home/calls-removebg-preview.png")}
            ></img>
            <h6>+91 9566926445</h6>
          </div>
          <div className="gmail-img">
            <img src={require("../../assets/Home/gmail_logo-.png")}></img>
            <h6>varna.1045@gmail.com</h6>
          </div>
          <div className="linkedin-img">
            <img src={require("../../assets/Home/linkedin.png")}></img>
            <a href="https://www.linkedin.com/in/varna1002/"><h6>Linked In</h6></a>
          </div>
        </div>

        <div className="details">
          <div className="inputs">
            <form onSubmit={sendEmail}>
              <label htmlFor="name">Name</label>
              <br />
              <input type="text" id="name" name="name" required />
              <br />
              <br />

              <label htmlFor="email">Email</label>
              <br />
              <input type="email" id="email" name="email" required />
              <br />
              <br />

              <label htmlFor="message">Message</label>
              <br />
              <textarea id="message" name="message" required></textarea>
              <br />
              <br />

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
