import React from 'react';
import './CultureSection.css';

const CultureSection = () => {
  return (
    <section className="culture-section">
      <div className="divider"></div>
      <h2 className="culture-title">Cultura DevOps</h2>
      <p className="culture-text">
        A cultura DevOps une desenvolvimento e operações para acelerar entregas com alta qualidade. 
        Baseia-se em automação, integração contínua (CI/CD) e monitoramento constante dos sistemas. 
        Promove colaboração, empatia e responsabilidade compartilhada entre todos os times da empresa. 
        Estimula uma cultura de aprendizado contínuo, aceitação de falhas e feedback rápido. 
        Elimina silos organizacionais para que o software agregue valor ao cliente final constantemente. 
        Foca em fluxos de trabalho eficientes através de processos repetíveis, previsíveis e escaláveis.
      </p>
    </section>
  );
};

export default CultureSection;