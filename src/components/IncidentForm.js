import React, { useState } from 'react';
import './IncidentForm.css';

const IncidentForm = ({ onAddIncident, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Medium');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddIncident({ title, description, severity });
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <h3>Report New Incident</h3>
      
      {/* Title Field */}
      <div className="form-group">
        <label htmlFor="title">Title*</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>
      
      {/* Description Field */}
      <div className="form-group">
        <label htmlFor="description">Description*</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>
      
      {/* Severity Selection */}
      <div className="form-group">
        <label>Severity*</label>
        <div className="severity-options">
          {['Low', 'Medium', 'High'].map((level) => (
            <div key={level} className="severity-option">
              <input
                type="radio"
                id={`severity-${level.toLowerCase()}`}
                name="severity"
                value={level}
                checked={severity === level}
                onChange={() => setSeverity(level)}
                className="severity-radio"
              />
              <label 
                htmlFor={`severity-${level.toLowerCase()}`}
                className={`severity-label ${level.toLowerCase()}`}
              >
                <span className="radio-circle"></span>
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Form Actions */}
      <div className="form-actions">
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="submit-button">
          Submit Report
        </button>
      </div>
    </form>
  );
};

export default IncidentForm;