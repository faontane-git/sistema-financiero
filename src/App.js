// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import MainMenu from './Menu/MainMenu';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main-menu" element={<MainMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
