import './App.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Home from './PortfolioContainer/Home/Home';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
function App() {
  return (
    <div className="App">
      <Home/>
      <section id="aboutme">
        <AboutMe/>
      </section>
      <section id="contactme">
        <ContactMe/>
      </section>
    </div>
  );
}
export default App;
