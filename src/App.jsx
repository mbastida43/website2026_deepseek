import React from 'react';
import Header from './components/Header';
import CardsSection from './components/CardsSection';
import CultureSection from './components/CultureSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="background-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <div className="content">
        <Header />
        <CardsSection />
        <CultureSection />
      </div>
    </div>
  );
}

export default App;