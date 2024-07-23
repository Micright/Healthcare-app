import React, { useState } from 'react';
import axios from 'axios';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientId: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/appointments', formData)
      .then(response => {
        console.log('Appointment created:', response.data);
      })
      .catch(error => {
        console.error('Error creating appointment:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Patient ID:</label>
        <input type="text" name="patientId" value={formData.patientId} onChange={handleChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
      </div>
      <div>
        <label>Reason:</label>
        <input type="text" name="reason" value={formData.reason} onChange={handleChange} />
      </div>
      <button type="submit">Create Appointment</button>
    </form>
  );
}

export default AppointmentForm;
