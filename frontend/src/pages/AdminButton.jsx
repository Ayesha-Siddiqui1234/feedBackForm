import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const AdminButton = () => {
  const navigate = useNavigate();

  return (
    <div className="center">
      <button className="admin-btn" onClick={() => navigate('/login')}>
        Admin Panel
      </button>
    </div>
  );
};

export default AdminButton;
