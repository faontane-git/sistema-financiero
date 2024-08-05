// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import MainMenu from './Menu/MainMenu';
import Ingresos from './Ingresos/Ingresos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/ingresos" element={<Ingresos />} />  
      </Routes>
    </Router>
  );
};

export default App;
