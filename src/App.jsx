import './App.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Home from './PortfolioContainer/Home/Home';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Skills from './PortfolioContainer/Skills/Skills';
import Navbar from './PortfolioContainer/NavBar/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <section id="home">
        <Home/>
      </section>
      <section id="aboutme">
        <AboutMe/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="contactme">
        <ContactMe/>
      </section>
    </div>
  );
}
export default App;
