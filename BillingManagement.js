import React, { useState, useEffect } from 'react';

const BillingManagement = () => {
  const [bills, setBills] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedBills = JSON.parse(localStorage.getItem('bills')) || [];
    setBills(storedBills);
  }, []);

  useEffect(() => {
    localStorage.setItem('bills', JSON.stringify(bills));
  }, [bills]);

  const addBill = () => {
    const newBill = { patientName, amount, paymentStatus };
    setBills([...bills, newBill]);
    setPatientName('');
    setAmount('');
    setPaymentStatus('');
  };

  const filteredBills = bills.filter((bill) =>
    bill.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Billing Management</h2>
      <input
        type="text"
        placeholder="Search Bills"
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
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Payment Status"
        value={paymentStatus}
        onChange={(e) => setPaymentStatus(e.target.value)}
      />
      <button onClick={addBill}>Add Bill</button>

      <h3>Bill List</h3>
      <ul>
        {filteredBills.map((bill, index) => (
          <li key={index}>
            <strong>{bill.patientName}</strong> - {bill.amount} - {bill.paymentStatus}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillingManagement;