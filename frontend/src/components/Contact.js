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

    fetch('http://localhost:5000/send', { // Cambia esto a la URL de tu backend local durante el desarrollo
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.text())
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
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Send</button>
      </form>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={50} />
        </a>
        <a href="https://github.com/tu-usuario-github" target="_blank" rel="noopener noreferrer">
          <FaGithub size={50} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
