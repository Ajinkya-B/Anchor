import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      
      <div className="user-info">
        <img 
          src={user?.picture || 'https://via.placeholder.com/80'} 
          alt={user?.name || 'User'} 
          className="user-avatar"
        />
        <h1>Welcome, {user?.name}!</h1>
        <p>{user?.email}</p>
        <p style={{ marginTop: '2rem', opacity: 0.7 }}>
          Dashboard content will be added here...
        </p>
      </div>
    </div>
  );
};

export default Dashboard;