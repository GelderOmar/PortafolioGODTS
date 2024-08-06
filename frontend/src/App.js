import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';



import './App.css'; // Estilos globales

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('.section');
      
      sections.forEach(section => {
        const offsetTop = section.offsetTop - 100; // Ajusta el valor para centrar la sección
        const height = section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header currentSection={currentSection} />
      <section id="home" className="section"><Hero /></section>
      <section id="about" className="section"><About /></section>
      <section id="skills" className="section"><Skills /></section>
      <section id="projects" className="section"><Projects /></section>
      <section id="contact" className="section"><Contact /></section>
      <Footer />
    </>
  );
};

export default App;
