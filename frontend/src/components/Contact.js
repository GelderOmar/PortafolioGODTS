import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://portafoliogodts.onrender.com/send', { // Cambia esto a la URL de tu backend en Render
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        alert('Message sent successfully!');
        // Limpiar los campos del formulario
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message.');
      });
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Correo:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Mensaje:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/gelder-omar-ts" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={50} />
        </a>
        <a href="https://github.com/GelderOmar" target="_blank" rel="noopener noreferrer">
          <FaGithub size={50} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
