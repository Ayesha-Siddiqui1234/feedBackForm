import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AdminSignup() {
  const [user, setUser] = useState({ username: '', password: '', captcha: '' });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Basic signup logic
    localStorage.setItem('admin', JSON.stringify(user));
    navigate('/admin-login');
  };

  return (
    <div className="container">
      <h2>Admin Signup</h2>
      <form onSubmit={handleSignup}>
        <label>Username</label>
        <input name="username" onChange={(e) => setUser({ ...user, username: e.target.value })} />

        <label>Password</label>
        <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />

        <label>Captcha: What is 3 + 4?</label>
        <input onChange={(e) => setUser({ ...user, captcha: e.target.value })} />

        <button type="submit" disabled={user.captcha !== '7'}>Signup</button>
      </form>
      <p>Already have an account? <Link to="/admin-login">Login here</Link></p>
    </div>
  );
}

export default AdminSignup;

