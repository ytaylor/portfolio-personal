import './Technologies.css';

function Technologies() {
  const techCategories = [
    {
      category: 'Desarrollo Web',
      skills: ['JavaScript', 'React', 'NodeJS', 'Bootstrap', 'MySQL', 'MongoDB','APIs REST' ]
    },
    {
      category: 'Análisis de Datos',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Power BI', 'Tableau']
    },
     {
      category: 'IA Generativa',
      skills: ['Github Copilot', 'ChatGPT', 'LLM', 'Gemini', 'Claude',  "Prompts",  "Ollama"]
    },
    {
      category: 'Herramientas Transversales',
      skills: ['Git', 'Metodologías ágiles']
    }
  ];

  return (
    <section id="technologies" className="technologies">
      <div className="container">
        <h2 className="section-title">Tecnologías y Habilidades</h2>
        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <h3 className="tech-category-title">{category.category}</h3>
              <div className="tech-badges">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
