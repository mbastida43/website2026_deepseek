import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CardsSection from './components/CardsSection';
import CultureSection from './components/CultureSection';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="background-animation">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="grid-pattern"></div>
        </div>

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <CardsSection />
                  <CultureSection />
                </>
              }
            />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;