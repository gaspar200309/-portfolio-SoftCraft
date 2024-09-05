import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">¿Quiénes somos?</h1>
        <p className="about-description">
          Somos una empresa dedicada al desarrollo de software, especializada en la creación de aplicaciones móviles y web,
          integrando inteligencia artificial para ofrecer soluciones innovadoras y de alta calidad a nuestros clientes.
        </p>

        <h2 className="about-subtitle">Nuestros Servicios</h2>
        <ul className="services-list">
          <li>Desarrollo de Aplicaciones Móviles</li>
          <li>Desarrollo de Aplicaciones Web</li>
          <li>Integración de IA</li>
          <li>Consultoría Tecnológica</li>
        </ul>

        <h2 className="about-subtitle">Cultura Empresarial</h2>
        <p className="about-description">
          Fomentamos un entorno de innovación, trabajo en equipo y compromiso con la calidad para asegurar el éxito en cada proyecto.
        </p>

        <h2 className="about-subtitle">Misión y Visión</h2>
        <p className="about-description">
          Nuestra misión es ofrecer soluciones tecnológicas de vanguardia que impulsen el crecimiento de nuestros clientes.
          Nos vemos como líderes en la industria, generando un impacto positivo en el futuro del desarrollo de software.
        </p>

        <h2 className="about-subtitle">Nuestros Valores</h2>
        <ul className="values-list">
          <li>Integridad</li>
          <li>Orientación al Cliente</li>
          <li>Excelencia</li>
        </ul>

        <button className="contact-button">Contáctanos</button>
      </div>
    </section>
  );
};

export default AboutSection;