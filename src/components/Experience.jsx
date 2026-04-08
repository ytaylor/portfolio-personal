import './Experience.css';

function Experience() {
  const experiences = [
     {
      year: '2025- Actualidad',
      title: 'Data Analytics Instructor',
      company: 'ADALAB',
      description: 'Formación en análisis de datos utilizando Python, Pandas, Power BI y Tableau. Mentorización de proyectos de análisis de datos.'
    },
    
    {
      year: '2024-2025',
      title: 'Academic Manager',
      company: 'ADALAB',
      description: 'Coordinación del equipo docente y responsabilidad sobre contenidos y metodología de los programas formativos.'
    },
    {
      year: '2021-2024',
      title: 'Full Stack Lead Developer Instructor',
      company: 'ADALAB',
      description: 'Formación en React, JavaScript, NodeJS, MySQL y MongoDB. Mentorización de proyectos tecnológicos.'
    },
    {
      year: '2019-2021',
      title: 'Full Stack Lead Developer',
      company: 'Overseas Tech Services',
      description: 'Desarrollo de aplicación móvil utilizando React Native y NodeJS. Participación en arquitectura del producto.'
    },
    {
      year: '2018-2019',
      title: 'Full Stack Developer',
      company: 'AEICE',
      description: 'Virtualización de procesos para pymes e implantación de herramientas de productividad en la nube.'
    },
    {
      year: '2018-2019',
      title: 'Profesora',
      company: 'Máster Ingeniería Informática - Universidad de Valladolid',
      description: 'Docencia en asignatura de Inteligencia de Negocio.'
    },
    {
      year: '2017',
      title: 'Full Stack Developer',
      company: 'NetDesign',
      description: 'Desarrollo de aplicaciones web con PHP, JavaScript, MySQL, Symfony y Bootstrap.'
    },
    {
      year: '2017',
      title: 'Backend Developer',
      company: 'Startup Kolaboo',
      description: 'Desarrollo de funcionalidades backend para metabuscador web.'
    },
    {
      year: '2013-2016',
      title: 'Seguridad Informática',
      company: 'UIM',
      description: 'Implementación de plataforma web en PHP para control de inventarios informáticos.'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiencia Profesional</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">{exp.year}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
