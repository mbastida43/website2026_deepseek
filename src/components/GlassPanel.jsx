import React from 'react';
import './GlassPanel.css';

const GlassPanel = ({ title, icon, description, accentColor, children }) => {
  return (
    <div className="glass-panel" style={{ '--accent-color': accentColor }}>
      <div className="glass-panel-inner">
        <div className="panel-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${accentColor}40 0%, transparent 70%)` }}></div>
        
        <div className="panel-header">
          <div className="icon-wrapper" style={{ background: `${accentColor}20`, borderColor: `${accentColor}40` }}>
            <span className="icon" style={{ color: accentColor }}>{icon}</span>
          </div>
          <h3 className="panel-title" style={{ color: accentColor }}>{title}</h3>
        </div>
        
        <div className="panel-content">
          {children ? children : <p className="panel-description">{description}</p>}
        </div>
        
        <div className="panel-reflection"></div>
        <div className="panel-border" style={{ borderColor: `${accentColor}20` }}></div>
      </div>
    </div>
  );
};

export default GlassPanel;