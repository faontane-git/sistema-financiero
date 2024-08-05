// src/components/MainMenu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css'; // Asegúrate de tener el archivo CSS importado

const MainMenu = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  return (
    <div className="main-menu-container">
      <h1>Menú Principal</h1>
      <p>Bienvenido al sistema financiero</p>
      <div className="menu-items">
        <button className="menu-button" onClick={() => navigate('/ingresos')}>Ingresos</button>
        <button className="menu-button">Estadísticas</button>
        {/* Puedes agregar más opciones según sea necesario */}
      </div>
    </div>
  );
};

export default MainMenu;
