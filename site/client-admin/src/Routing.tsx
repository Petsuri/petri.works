import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

export default function Routing() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div />} />
        </Routes>
      </div>
    </Router>
  );
}
