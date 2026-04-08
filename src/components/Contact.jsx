import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'yaneliserranotaylor@gmail.com',
      link: 'mailto:yaneliserranotaylor@gmail.com',
      icon: '✉'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ytaylordev',
      link: 'https://linkedin.com/in/ytaylordev',
      icon: '🔗'
    },
    {
      label: 'GitHub',
      value: 'github.com/ytaylor',
      link: 'https://github.com/ytaylor',
      icon: '💻'
    },
    {
      label: 'Ubicación',
      value: 'Valladolid, España',
      link: null,
      icon: '📍'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-content">
          <p className="contact-intro">
            ¿Interesado en colaborar o saber más sobre mi trabajo? 
            <br />
            No dudes en contactarme a través de cualquiera de estos medios:
          </p>
          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <div key={index} className="contact-item">
                <span className="contact-icon">{contact.icon}</span>
                <div className="contact-info">
                  <span className="contact-label">{contact.label}</span>
                  {contact.link ? (
                    <a href={contact.link} className="contact-value" target="_blank" rel="noopener noreferrer">
                      {contact.value}
                    </a>
                  ) : (
                    <span className="contact-value">{contact.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Yanelis Serrano Taylor. Todos los derechos reservados.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
