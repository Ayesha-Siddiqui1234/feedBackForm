import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AdminLogin() {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('admin') || '{}');
    if (stored.username === creds.username && stored.password === creds.password) {
      navigate('/admin-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input name="username" onChange={(e) => setCreds({ ...creds, username: e.target.value })} />

        <label>Password</label>
        <input type="password" name="password" onChange={(e) => setCreds({ ...creds, password: e.target.value })} />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/admin-signup">Signup here</Link></p>
    </div>
  );
}

export default AdminLogin;
