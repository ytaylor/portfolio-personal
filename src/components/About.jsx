import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="about-content">
          <div className="about-text">
        

            <p>
              Soy una <strong>Ingeniera Informática</strong> con más de <strong>diez años de experiencia</strong> en 
              desarrollo de software y liderazgo técnico. Me muevo sobre todo en <strong>JavaScript, React, NodeJS</strong> y 
              bases de datos <strong>SQL/NoSQL</strong>.
            </p>

            <p>
              En los últimos años también me he enfocado más en <strong>análisis de datos</strong>, trabajando con 
              <strong>Python, Pandas, PySpark</strong> y herramientas de visualización como <strong>Power BI y Tableau</strong>. 
              Tengo una forma de trabajar bastante analítica, soy organizada y voy muy enfocada a resultados, 
              e integro soluciones basadas en <strong>IA generativa</strong> en mis proyectos.
            </p>

            <p>
              Mi experiencia incluye <strong>docencia tecnológica, liderazgo de equipos</strong> y 
              desarrollo de proyectos de todo tipo, desde aplicaciones web y móviles hasta sistemas de 
              análisis de datos para empresas.
            </p>
          </div>
          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Ubicación</span>
              <span className="info-value">Valladolid, España</span>
            </div>
            <div className="info-item">
              <span className="info-label">Experiencia</span>
              <span className="info-value">+8 años</span>
            </div>
            <div className="info-item">
              <span className="info-label">Especialidad</span>
              <span className="info-value">Full Stack & Data Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
