import './index.css';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure App.js is your main component
import { AuthProvider } from './context/AuthContext'; // Adjust path if AuthContext is elsewhere

// Render the application with AuthProvider wrapping the App
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
