import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <h2>Sobre mí</h2>
      <p>
        Soy un apasionado desarrollador con un amor profundo por la programación, el fútbol y la música. 
        Me caracterizo por mi compromiso con cada tarea, ya sea pequeña o compleja, y siempre busco aportar de manera positiva al equipo de trabajo. 
        Mi objetivo es dar lo mejor de mí en cada proyecto, asegurándome de que mi contribución sea significativa y efectiva.
      </p>

      {/* Nueva sección de certificaciones */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Certificaciones Oracle Next Education:</h2>
        <a href="https://app.aluracursos.com/user/gelderomarts/fullCertificate/a8bc41efd40d344e93ac0fd6f769cb7d" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Ver Certificación
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
