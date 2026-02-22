import React, { useState, useEffect } from 'react';

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const bookAppointment = () => {
    const newAppointment = { patientName, doctorName, date };
    setAppointments([...appointments, newAppointment]);
    setPatientName('');
    setDoctorName('');
    setDate('');
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Appointment Management</h2>
      <input
        type="text"
        placeholder="Search Appointments"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Doctor Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={bookAppointment}>Book Appointment</button>

      <h3>Appointment List</h3>
      <ul>
        {filteredAppointments.map((appointment, index) => (
          <li key={index}>
            <strong>{appointment.patientName}</strong> - {appointment.doctorName} - {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentManagement;