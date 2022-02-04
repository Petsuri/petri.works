import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './App.css';
import LoginCallback from './authentication/LoginCallback';

export default function Routing() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login/callback/" element={<LoginCallback />} />
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </Router>
  );
}
