import React, { useState, useEffect } from 'react';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedInventory = JSON.parse(localStorage.getItem('inventory')) || [];
    setInventory(storedInventory);
  }, []);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  const addMedicine = () => {
    const newMedicine = { medicineName, quantity, expiryDate };
    setInventory([...inventory, newMedicine]);
    setMedicineName('');
    setQuantity('');
    setExpiryDate('');
  };

  const filteredInventory = inventory.filter((item) =>
    item.medicineName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Inventory Management</h2>
      <input
        type="text"
        placeholder="Search Medicines"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Medicine Name"
        value={medicineName}
        onChange={(e) => setMedicineName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="date"
        placeholder="Expiry Date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />
      <button onClick={addMedicine}>Add Medicine</button>

      <h3>Inventory List</h3>
      <ul>
        {filteredInventory.map((item, index) => (
          <li key={index}>
            <strong>{item.medicineName}</strong> - {item.quantity} - {item.expiryDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryManagement;