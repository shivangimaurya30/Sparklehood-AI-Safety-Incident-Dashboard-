import React, { useState } from 'react';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import { mockIncidents } from '../data/mockData';

const IncidentDashboard = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showForm, setShowForm] = useState(false);

  const handleAddIncident = (newIncident) => {
    const incident = {
      ...newIncident,
      id: Math.max(0, ...incidents.map(i => i.id)) + 1,
      reported_at: new Date().toISOString(),
    };
    setIncidents([incident, ...incidents]);
    setShowForm(false);
  };

  const filteredIncidents = incidents.filter(incident => 
    severityFilter === 'All' || incident.severity === severityFilter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortOrder === 'newest' 
      ? dateB.getTime() - dateA.getTime() 
      : dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="dashboard">
      <div className="dashboard-controls">
        {}
        <button 
          className={`toggle-form-button ${showForm ? 'active' : ''}`}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Report New Incident'}
        </button>
      </div>

      {showForm ? (
        <IncidentForm 
          onAddIncident={handleAddIncident} 
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <IncidentList incidents={sortedIncidents} />
      )}
    </div>
  );
};

export default IncidentDashboard;