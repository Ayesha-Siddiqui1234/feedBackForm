import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/custom.css'; // <-- Update yeh line if you're using custom CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
