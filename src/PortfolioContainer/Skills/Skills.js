import React, { useState } from "react";
import "./Skills.css";

export default function Skills() {
  const [activeSection, setActiveSection] = useState("Programming Skills");

  const renderContent = () => {
    switch (activeSection) {
      
      case "Programming Skills":
        return (
          <div className="section">
            <div className="item">
              <h3>Languages</h3>
              <p>JavaScript, Python, C , Java</p>
            </div>
            <div className="item">
              <h3>Frameworks & Libraries</h3>
              <p>React.js, Next.js</p>
            </div>
            <div className="item">
              <h3>Technical Skills</h3>
              <p>HTML , CSS , Tailwind CSS , UI/UX Design , Git , Github</p> 
            </div>
          </div>  
        );
      case "Projects":  
        return (
          <div className="section"> 
            <div className="item">
              <h3>Portfolio Website</h3>
              <p>Developed a personal portfolio website using React to showcase my technical skills, academic background, and projects. The website includes smooth navigation, animated UI components, and responsive design for both desktop and mobile devices.</p>
            </div>
            <div className="item">
              <h3>Food Delivery UI</h3>
              <p>Designed a modern and user-friendly food delivery application interface using Figma for prototyping and HTML/CSS for implementation. Focused on layout consistency, visual hierarchy, and intuitive user experience.</p>
            </div>
          </div>
        );
      case "Interests":
        return (
          <div className="section">
            <div className="item">
              <h3>Learning New Tech</h3>
              <p>Always curious about new technologies and tools.</p>
            </div>
            <div className="item">
              <h3>Coding</h3>
              <p>I love solving problems through code and continuously improving my development skills.</p>
            </div>
            <div className="item">
              <h3>Creative Design</h3>
              <p>I enjoy working on UI/UX designs and wireframing.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="skill-wrapper" id="resume">

        <h1 className="sectiontitle">Skills</h1>
        <hr className="hr" />
        <p className="sectionsubtitle">My Professional and Personal Skills</p>
  

      <div className="skill-container">
        <aside className="sidebar">
          <ul>
            {["Programming Skills", "Projects", "Interests"].map(
              (section) => (
                <li
                  key={section}
                  className={activeSection === section ? "active" : ""}
                  onClick={() => setActiveSection(section)}
                >
                  <i className="icon"></i> {section}
                </li>
              )
            )}
          </ul>
        </aside>

        <main className="content">{renderContent()}</main>
      </div>
    </div>
  );
}
