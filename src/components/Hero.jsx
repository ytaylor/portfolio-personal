import './Hero.css';
import profileImage from '../assets/image.png';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hola, soy <span className="hero-name">Yanelis Serrano Taylor</span>
          </h1>
          <p className="hero-subtitle">Ingeniera Informática</p>
          <p className="hero-description">
            Desarrolladora Full Stack con más de 10 años de experiencia, especializada en JavaScript, React y NodeJS, con enfoque en análisis de datos utilizando Python, Pandas, PySpark y herramientas de visualización como Power BI y Tableau, y con experiencia en el uso de IA generativa aplicada al desarrollo y análisis.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contacto</a>
            <a href="#about" className="btn btn-secondary">Conoce más</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src={profileImage}
            alt="Retrato de Yanelis Serrano Taylor"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
