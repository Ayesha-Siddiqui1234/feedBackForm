import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FeedbackForm from './pages/FeedbackForm';
import ThankYou from './pages/ThankYou';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import './styles/custom.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <Router>
      <div className="app">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<h2 className="not-found">404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
