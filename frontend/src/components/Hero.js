import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const staticText = ' Bienvenido a mi portafolio.';
  const typingInitialText = 'Hola, soy Gelder Tubac. ';
  const typingSpeed = 100;
  const delayBeforeTyping = 1000; // Retraso antes de comenzar el efecto de escritura

  useEffect(() => {
    let letterIndex = 0;
    let currentText = '';

    const typeEffect = () => {
      if (letterIndex < typingInitialText.length) {
        currentText += typingInitialText.charAt(letterIndex);
        setTypingText(currentText);
        letterIndex++;
        setTimeout(typeEffect, typingSpeed);
      }
    };

    // Iniciar el efecto de escritura después del retraso
    setTimeout(typeEffect, delayBeforeTyping);
  }, []);

  return (
    <section className="hero">
      <h1 className="typing-text">{typingText}</h1>
      <p className="static-text">{staticText}</p>
    </section>
  );
};

export default Hero;
