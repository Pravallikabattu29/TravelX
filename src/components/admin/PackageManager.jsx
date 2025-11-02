import React, { useState } from 'react';
import '../../styles/Admin.css';

const PackageManager = () => {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState('');

  const addPackage = () => {
    if (newPackage.trim() !== '') {
      setPackages([...packages, { id: Date.now(), name: newPackage }]);
      setNewPackage('');
    }
  };

  const deletePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  return (
    <div className="admin-container">
      <h2>Manage Packages</h2>

      <div className="admin-form">
        <input 
          type="text" 
          value={newPackage} 
          onChange={(e) => setNewPackage(e.target.value)} 
          placeholder="Enter Package Name"
        />
        <button onClick={addPackage}>Add Package</button>
      </div>

      <ul className="admin-list">
        {packages.map(pkg => (
          <li key={pkg.id}>
            {pkg.name}
            <button onClick={() => deletePackage(pkg.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageManager;
