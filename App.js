import React from 'react';
import PatientManagement from './components/PatientManagement';
import DoctorManagement from './components/DoctorManagement';
import AppointmentManagement from './components/AppointmentManagement';
import InventoryManagement from './components/InventoryManagement';
import BillingManagement from './components/BillingManagement';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Hospital Management System</h1>
      <PatientManagement />
      <DoctorManagement />
      <AppointmentManagement />
      <InventoryManagement />
      <BillingManagement />
      <WardManagement />
      <Reporting />
      <Notifications />
      <EmergencyManagement />
    </div>
  );
}

export default App;