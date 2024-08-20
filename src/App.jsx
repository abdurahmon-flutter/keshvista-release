import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './MainComponent';
import Request from './Request';
import "./App.css"
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={< Main/>} />
      <Route path="/request" element={< Request/>} />
      </Routes>
    </Router>
  );
}

export default App;
