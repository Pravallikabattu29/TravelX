import React, { useState } from 'react';
import '../../styles/Admin.css';

const TransportManager = () => {
  const [transports, setTransports] = useState([]);
  const [newTransport, setNewTransport] = useState('');

  const addTransport = () => {
    if (newTransport.trim() !== '') {
      setTransports([...transports, { id: Date.now(), name: newTransport }]);
      setNewTransport('');
    }
  };

  const deleteTransport = (id) => {
    setTransports(transports.filter(trans => trans.id !== id));
  };

  return (
    <div className="admin-container">
      <h2>Manage Transport</h2>

      <div className="admin-form">
        <input 
          type="text" 
          value={newTransport} 
          onChange={(e) => setNewTransport(e.target.value)} 
          placeholder="Enter Transport Name"
        />
        <button onClick={addTransport}>Add Transport</button>
      </div>

      <ul className="admin-list">
        {transports.map(trans => (
          <li key={trans.id}>
            {trans.name}
            <button onClick={() => deleteTransport(trans.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransportManager;
