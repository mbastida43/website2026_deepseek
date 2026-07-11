import React from 'react';
import GlassPanel from './GlassPanel';
import './CultureSection.css';

const CultureSection = () => {
  return (
    <section className="culture-section">
      <div className="divider"></div>
      <GlassPanel 
        title="Cultura DevOps" 
        icon="♾" 
        accentColor="#10b981"
      >
        <div className="culture-text">
          <p><strong>1. Cultura Generativa (Westrum):</strong> Ambientes de alta performance baseiam-se em confiança, colaboração e compartilhamento de riscos.</p>
          <p><strong>2. Segurança Psicológica:</strong> Times devem sentir-se seguros para expor ideias, falhar e aprender sem medo de punições.</p>
          <p><strong>3. Aprendizado Contínuo:</strong> Experimentação constante, feedback rápido e melhoria iterativa são pilares culturais.</p>
          <p><strong>4. Foco no Fluxo:</strong> Eliminação de gargalos, handoffs manuais e desperdícios para acelerar a entrega de valor.</p>
          <p><strong>5. Automação como Fundamento:</strong> Tudo que é repetível deve ser automatizado (testes, deploy, infraestrutura) para liberar criatividade.</p>
          <p><strong>6. Métricas de Desempenho:</strong> Uso das 4 métricas-chave (lead time, frequência de deploy, MTTR, taxa de falhas) para guiar decisões.</p>
          <p><strong>7. Responsabilidade Compartilhada:</strong> Desenvolvedores e operações são igualmente responsáveis pela qualidade e estabilidade do sistema.</p>
          <p><strong>8. Arquitetura Evolutiva:</strong> Sistemas fracamente acoplados, com deploys independentes, que permitem autonomia dos times.</p>
          <p><strong>9. Gestão Lean de Produto:</strong> Priorização baseada em feedback de usuários e ciclos curtos de experimentação.</p>
          <p><strong>10. Liderança Transformacional:</strong> Líderes que inspiram, removem obstáculos e promovem a visão DevOps em toda a organização.</p>
        </div>
      </GlassPanel>
    </section>
  );
};

export default CultureSection;