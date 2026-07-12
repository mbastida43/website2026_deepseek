import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app">
      <div className="background-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="content contact-page-shell">
        <div className="contact-page">
          <Link className="back-link" to="/">
            ← Voltar ao início
          </Link>

          <div className="contact-card">
            <h1>Contato</h1>
            <p>Preencha o formulário abaixo e entraremos em contato em breve.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>Nome:</span>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                />
              </label>

              <label className="field">
                <span>Email:</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </label>

              <label className="field">
                <span>Assunto</span>
                <input
                  type="text"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  placeholder="Digite o assunto"
                />
              </label>

              <button type="submit">Enviar</button>
            </form>

            {submitted && (
              <p className="success-message">
                Obrigado! Sua mensagem foi recebida com sucesso.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
