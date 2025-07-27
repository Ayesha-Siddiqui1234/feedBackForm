import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 style={{ margin: 0 }}>Feedback System</h2>
      </div>
      <div className="navbar-right">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? ' Light Mode' : 'Dark Mode'}
        </button>
        <button className="admin-btn" onClick={() => navigate('/admin-login')}>
          Admin
        </button>
      </div>
    </nav>
  );
}

export default Navbar;








