import React from 'react';
import '../App.css'; 

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contato</h1>
      <p>Entre em contato conosco para sugestões, dúvidas ou parcerias.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
};

export default Contact;