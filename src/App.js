import React from 'react';
import { FaRobot, FaShieldAlt } from 'react-icons/fa';
import IncidentDashboard from './components/IncidentDashboard';
import './styles/main.css';

function App() {
  return (
    <div className="app">
      {/* Header with React Icons */}
      <header className="app-header">
        <h1>
          <FaRobot className="header-icon" />
          AI Safety Incident Tracker
          <FaShieldAlt className="header-icon" />
        </h1>
        <p className="subtitle">Monitoring and reporting AI safety concerns</p>
      </header>
      
      <main className="app-content">
        <IncidentDashboard />
      </main>
      
      <footer className="app-footer">
        <p>HumanChain AI Safety Initiative</p>
      </footer>
    </div>
  );
}

export default App;