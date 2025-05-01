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
            src={require("../../assets/Home/img_3.png")}      
            alt="Graduation"
          />
        </div>
        <div className="about-text">
          <p className="about-description">
          Aspiring Full Stack Web and Mobile Developer with a solid foundation in HTML , CSS and Javascript , currently advancing my skills in React.js, Next.js, and TypeScript. I have a growing interest in the MERN stack and state management tools like Redux. Passionate about building user-friendly, responsive, and efficient applications.
          </p>
          <h3 className="highlights-title">Here are a Few Highlights</h3>
          <ul className="highlights-list">
            <li>🔥 Web development</li>
            <li>🔥 Interactive Front End as per the design</li>
            <li>🔥 Rapid skill acquisition</li>
            <li>🔥 Redux for State Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
