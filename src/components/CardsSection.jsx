import React from 'react';
import GlassPanel from './GlassPanel';
import './CardsSection.css';

const CardsSection = () => {
  const panels = [
    {
      title: "DevOps",
      icon: "∞",
      accentColor: "#6366f1",
      description: "Automação de pipelines CI/CD, infraestrutura como código, containerização com Docker e Kubernetes, monitoramento e observabilidade. Otimização de deploy e entrega contínua para aplicações de alta disponibilidade."
    },
    {
      title: "DevSecOps",
      icon: "🛡",
      accentColor: "#3b82f6",
      description: "Integração de segurança no ciclo de desenvolvimento, análise estática e dinâmica de código, gestão de vulnerabilidades, compliance e políticas de segurança automatizadas. Proteção de dados e infraestrutura em todas as camadas."
    },
    {
      title: "AI",
      icon: "✦",
      accentColor: "#8b5cf6",
      description: "Implementação de soluções de inteligência artificial e machine learning, processamento de linguagem natural, automação inteligente, análise preditiva e integração de APIs de IA generativa para aplicações modernas."
    }
  ];

  return (
    <section className="cards-section">
      <div className="cards-container">
        {panels.map((panel, index) => (
          <div key={index} className="card-wrapper" style={{ animationDelay: `${index * 0.2}s` }}>
            <GlassPanel
              title={panel.title}
              icon={panel.icon}
              description={panel.description}
              accentColor={panel.accentColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;