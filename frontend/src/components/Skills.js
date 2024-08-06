import React from 'react';
import '../styles/Skills.css';
import { CgPiano } from 'react-icons/cg';
import { GiSaxophone } from "react-icons/gi";
import { FaTv, FaFutbol, FaHeadphones, FaSwimmer, FaHtml5, FaJs, FaLaravel, FaNodeJs, FaPhp, FaReact, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="icon-size" /> },
  { name: 'JavaScript', icon: <FaJs className="icon-size" /> },
  { name: 'Laravel', icon: <FaLaravel className="icon-size" /> },
  { name: 'Node.js', icon: <FaNodeJs className="icon-size" /> },
  { name: 'PHP', icon: <FaPhp className="icon-size" /> },
  { name: 'React', icon: <FaReact className="icon-size" /> },
  { name: 'SQL', icon: <FaDatabase className="icon-size" /> },
];

const hobbies = [
  { name: 'Saxofón', icon: <GiSaxophone className="icon-size" /> },
  { name: 'Piano', icon: <CgPiano className="icon-size" /> },
  { name: 'Ver series', icon: <FaTv className="icon-size" /> },
  { name: 'Fútbol', icon: <FaFutbol className="icon-size" /> },
  { name: 'Oír música', icon: <FaHeadphones className="icon-size" /> },
  { name: 'Nadar', icon: <FaSwimmer className="icon-size" /> },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skills-item">
            <div className="skill-card">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          </li>
        ))}
      </ul>
      <h2>Hobbies</h2>
      <ul className="hobbies-list">
        {hobbies.map((hobby) => (
          <li key={hobby.name} className="hobbies-item">
            <div className="hobby-card">
              {hobby.icon}
              <span>{hobby.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
