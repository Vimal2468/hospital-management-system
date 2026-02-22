import React, { useState, useEffect } from 'react';

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [contact, setContact] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem('doctors')) || [];
    setDoctors(storedDoctors);
  }, []);

  useEffect(() => {
    localStorage.setItem('doctors', JSON.stringify(doctors));
  }, [doctors]);

  const addDoctor = () => {
    const newDoctor = { name, specialization, contact };
    setDoctors([...doctors, newDoctor]);
    setName('');
    setSpecialization('');
    setContact('');
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Doctor Management</h2>
      <input
        type="text"
        placeholder="Search Doctors"
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
        placeholder="Specialization"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button onClick={addDoctor}>Add Doctor</button>

      <h3>Doctor List</h3>
      <ul>
        {filteredDoctors.map((doctor, index) => (
          <li key={index}>
            <strong>{doctor.name}</strong> - {doctor.specialization} - {doctor.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorManagement;