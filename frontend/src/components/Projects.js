import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: 'SpaceApp',
    description: 'Aplicación web diseñada para explorar imágenes astronómicas proporcionadas por la NASA. La aplicación utiliza la API REST "Astronomy Picture of the Day" (APOD) de la NASA para mostrar una galería dinámica de imágenes del espacio, con descripciones y títulos detallados para cada una. Los usuarios pueden buscar imágenes específicas mediante un campo de búsqueda integrado, facilitando la exploración de contenido astronómico relevante.',
    image: '/images/p1.png',
    github: 'https://github.com/GelderOmar/SpaceApp',
    website: 'https://space-app-ten-teal.vercel.app/'
  },
  {
    name: 'MIDI',
    description: 'Aplicación web interactiva que simula un teclado MIDI, permitiendo a los usuarios reproducir diferentes sonidos al hacer clic en botones visuales. Cada botón está asociado a un sonido específico que se activa al hacer clic o presionar teclas específicas del teclado.',
    image: '/images/p2.png',
    github: 'https://github.com/GelderOmar/Midi',
    website: 'https://midi-ruddy.vercel.app/'
  },
  {
    name: 'TimeFokus',
    description: 'Aplicación web para mejorar la productividad mediante la gestión de tiempos de trabajo y descanso, con temporizador configurable, música de fondo opcional, modos oscuro y claro, y alertas sonoras.',
    image: '/images/p3.png',
    github: 'https://github.com/GelderOmar/TimeFocus',
    website: 'https://time-focus.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="project-icon" />
                </a>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="project-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
