import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './App.css';
import Callback from './authentication/Callback';

export default function Routing() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login/callback/" element={<Callback />} />
          <Route path="/test" element={<App />} />
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </Router>
  );
}
