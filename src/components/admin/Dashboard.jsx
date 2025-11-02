import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Admin.css';

const Dashboard = () => {
  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="admin-links">
        <Link to="/admin/packages">Manage Packages</Link>
        <Link to="/admin/hotels">Manage Hotels</Link>
        <Link to="/admin/transport">Manage Transport</Link>
      </div>
    </div>
  );
};

export default Dashboard;
