import React, { useState } from 'react';

function IncidentList({ incidents }) {
  const [expandedIncident, setExpandedIncident] = useState(null);

  const toggleExpand = (id) => {
    setExpandedIncident(expandedIncident === id ? null : id);
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getSeverityClass = (severity) => {
    return severity.toLowerCase();
  };

  return (
    <div className="incident-list">
      {incidents.length === 0 ? (
        <div className="no-incidents">No incidents found matching your criteria</div>
      ) : (
        incidents.map((incident) => (
          <div 
            key={incident.id} 
            className={`incident-card ${getSeverityClass(incident.severity)}`}
          >
            <div className="incident-header">
              <div className="incident-title">{incident.title}</div>
              <div className="incident-meta">
                <span className={`severity-badge ${getSeverityClass(incident.severity)}`}>
                  {incident.severity}
                </span>
                <span className="reported-date">{formatDate(incident.reported_at)}</span>
              </div>
            </div>
            <button 
              className="view-details-button"
              onClick={() => toggleExpand(incident.id)}
            >
              {expandedIncident === incident.id ? 'Hide Details' : 'View Details'}
            </button>
            {expandedIncident === incident.id && (
              <div className="incident-description">
                <p>{incident.description}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default IncidentList;