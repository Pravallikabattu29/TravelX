import React, { useState } from 'react';
import '../../styles/Admin.css';

const HotelManager = () => {
  const [hotels, setHotels] = useState([]);
  const [newHotel, setNewHotel] = useState('');

  const addHotel = () => {
    if (newHotel.trim() !== '') {
      setHotels([...hotels, { id: Date.now(), name: newHotel }]);
      setNewHotel('');
    }
  };

  const deleteHotel = (id) => {
    setHotels(hotels.filter(hotel => hotel.id !== id));
  };

  return (
    <div className="admin-container">
      <h2>Manage Hotels</h2>

      <div className="admin-form">
        <input 
          type="text" 
          value={newHotel} 
          onChange={(e) => setNewHotel(e.target.value)} 
          placeholder="Enter Hotel Name"
        />
        <button onClick={addHotel}>Add Hotel</button>
      </div>

      <ul className="admin-list">
        {hotels.map(hotel => (
          <li key={hotel.id}>
            {hotel.name}
            <button onClick={() => deleteHotel(hotel.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelManager;
 