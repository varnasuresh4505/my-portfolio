import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };
  useEffect(() => {
    const sections = ['home', 'aboutme', 'skills', 'contactme'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="nav-style">
      <nav className="nav">
        <div className="nav-logo">VARNA S</div>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              onClick={() => handleLinkClick('home')}
              className={activeLink === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutme"
              onClick={() => handleLinkClick('aboutme')}
              className={activeLink === 'aboutme' ? 'active' : ''}
            >
              AboutMe
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => handleLinkClick('skills')}
              className={activeLink === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>  
            <a
              href="#contactme"
              onClick={() => handleLinkClick('contactme')}
              className={activeLink === 'contactme' ? 'active' : ''}
            >
              ContactMe
            </a>
          </li>  
        </ul>
      </nav>
    </div>
  );
}
