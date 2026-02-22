import React, { useState, useEffect } from 'react';

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const addPatient = () => {
    const newPatient = { name, contact, address, medicalHistory };
    setPatients([...patients, newPatient]);
    setName('');
    setContact('');
    setAddress('');
    setMedicalHistory('');
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Patient Management</h2>
      <input
        type="text"
        placeholder="Search Patients"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <textarea
        placeholder="Medical History"
        value={medicalHistory}
        onChange={(e) => setMedicalHistory(e.target.value)}
      />
      <button onClick={addPatient}>Add Patient</button>

      <h3>Patient List</h3>
      <ul>
        {filteredPatients.map((patient, index) => (
          <li key={index}>
            <strong>{patient.name}</strong> - {patient.contact} - {patient.address} - {patient.medicalHistory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientManagement;