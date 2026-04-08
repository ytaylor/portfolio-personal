import { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-container">
            <a href="#hero" className="navbar-logo">Yanelis Serrano Taylor</a>
            <button className="navbar-toggle" onClick={toggleMenu}>
              {menuOpen ? '✕' : '☰'}
            </button>
            <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
              <li><a href="#hero" onClick={closeMenu}>Inicio</a></li>
              <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
              <li><a href="#experience" onClick={closeMenu}>Experiencia</a></li>
              <li><a href="#education" onClick={closeMenu}>Educación</a></li>
              <li><a href="#technologies" onClick={closeMenu}>Tecnologías</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
            </ul>
          </div>
        </nav>
        <Hero />
        <About />
        <Technologies />
                <Education />

        <Experience />

        <Contact />
      </div>
    </Router>
  );
}

export default App;
