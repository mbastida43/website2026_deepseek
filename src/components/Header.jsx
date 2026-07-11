import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Marlon Bastida</h1>
        <div className="title-line"></div>
        <h2 className="role">DevSecOps Engineer</h2>
        <p className="subtitle">
          Transformando ideias em soluções escaláveis com 20 anos de experiência
        </p>
        <div className="tech-stack">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Java</span>
          <span className="tech-tag">Go</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">C#</span>
          <span className="tech-tag">Rust</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">Angular</span>
        </div>
      </div>
    </header>
  );
};

export default Header;