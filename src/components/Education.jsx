import './Education.css';

function Education() {
  const education = [
    {
      degree: 'Máster en Ingeniería Informática',
      specialty: 'Especialidad Big Data',
      institution: 'Universidad de Valladolid',
      period: '2016-2018'
    },
    {
      degree: 'Grado en Ingeniería Informática y Programación',
      specialty: '',
      institution: 'Instituto Politécnico José Antonio Echeverría, La Habana, Cuba',
      period: '2008-2013'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Formación Académica</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                {edu.specialty && <p className="education-specialty">{edu.specialty}</p>}
              </div>
              <div className="education-details">
                <p className="education-institution">{edu.institution}</p>
                <span className="education-period">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
