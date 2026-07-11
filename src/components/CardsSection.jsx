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
      description: "Implementação de soluções de inteligência artificial com IA generativa utilizando Claude Code num projeto de implementação de App Android para limpeza de emails Gmail com OAuth2, utilização do Gemini para generative AI para imagens, criação de Notebooks e um projeto para mitigar vulnerabilidades em aplicações SaaS."
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