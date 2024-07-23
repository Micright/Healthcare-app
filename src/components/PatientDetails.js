import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PatientDetails() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    axios.get(`/api/patients/${id}`)
      .then(response => setPatient(response.data))
      .catch(error => console.error('Error fetching patient details:', error));
  }, [id]);

  if (!patient) return <div>Loading...</div>;

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Condition: {patient.condition}</p>
    </div>
  );
}

export default PatientDetails;
