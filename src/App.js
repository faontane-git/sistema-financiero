// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landig/App';
import Login from './login/Login';
import Menu from './Menu/Menu';
import Ingresos from './Ingresos/Ingresos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ingresos" element={<Ingresos />} />
      </Routes>
    </Router>
  );
};

export default App;
