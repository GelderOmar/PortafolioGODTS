import React, { useState } from 'react';
import { Link } from 'react-scroll';
import useDarkMode from '../hooks/useDarkMode';
import '../styles/Header.css';

const Header = ({ currentSection }) => {
  const { theme, toggleTheme } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={500}
              className={currentSection === 'home' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500}
              className={currentSection === 'about' ? 'active' : ''}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500}
              className={currentSection === 'skills' ? 'active' : ''}
            >
              Skills&Hobbies
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500}
              className={currentSection === 'projects' ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              className={currentSection === 'contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
