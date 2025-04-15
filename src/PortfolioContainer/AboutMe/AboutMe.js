import React from "react";
import "./AboutMe.css";
export default function AboutMe() {
  return (
    <div className="about-container" id="aboutme">
      <h2 className="section-title">About Me</h2>
      <hr className="hr"></hr>
      <p className="section-subtitle">Why Choose Me?</p>
      <div className="about-box">
        <div className="about-image">
          <img
            src={require("../../assets/Home/profile.jpg")}
            alt="Graduation"
          />
        </div>
        <div className="about-text">
          <p className="about-description">
            Full stack web and mobile developer with background knowledge of
            MERN stack with Redux, along with a knack of building applications
            with utmost efficiency. Strong professional with a BSC willing to be
            an asset for an organization.
          </p>
          <h3 className="highlights-title">Here are a Few Highlights:</h3>
          <ul className="highlights-list">
            <li>🔥 Full Stack web and mobile development</li>
            <li>🔥 Interactive Front End as per the design</li>
            <li>🔥 React and React Native</li>
            <li>🔥 Redux for State Management</li>
            <li>🔥 Building REST API</li>
            <li>🔥 Managing database</li>
          </ul>
          <div className="about-buttons">
            <button className="btn hire-btn">Hire Me</button>
            <button className="btn resume-btn">Get Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
