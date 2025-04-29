import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
export default function Profile() {
  return (
  <div>
    {/* <div className="nav-style">
      <nav className="nav">
        <div className="nav-logo">VARNA S</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">AboutMe</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#contactme">ContactMe</a></li>
        </ul>
      </nav>
    </div> */}
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='#'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-google-plus-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='#'>
                <i className='fa fa-youtube-square'></i>
              </a> 
              <a href='#'>
                <i className='fa fa-twitter'></i>
              </a> 
            </div>
          </div>
        <div className='profile-details-name'> 
          <span className='primary-text'>
            {" "}
            Hello, I'm <span className='highlighted-text'>Varna</span> 
          </span>
        </div>
        <div className='profile-details-role'> 
          <span className='primary-text'>   
            {" "}
            <h1>
              {" "}
              <Typical
              loop={Infinity} 
              steps={[ 
                "Web Developer",
                1000,
                "Engineering Student",  
                1000,
                "Front-End Developer", 
                1000,
              ]}
              />
            </h1>
            <span className='profile-role-tagline'>
              Knack of building with front and back end operations.
            </span>
          </span>
        </div>
        <div className='profile-options'> 
          <button className='btn primary-btn'> 
            {""}
            Hire Me{" "} 
          </button>
          <a href='/V-resume.pdf' download='V-resume.pdf'>
            <button className='btn highlighted-btn'>Get Resume</button>
          </a>
        </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>    
    </div>
    </div>
  )
}
