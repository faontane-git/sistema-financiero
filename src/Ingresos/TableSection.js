import React from 'react';
import { Typography } from '@mui/material';

const TableSection = ({ data }) => {
  const totalBalance = data.reduce((acc, entry) => acc + entry.ingresos - entry.egresos, 0);

  return (
    <div>
      <Typography variant="h6" gutterBottom>Tabla de Ingresos y Egresos</Typography>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Ingresos</th>
            <th>Egresos</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.fecha}</td>
              <td>{entry.ingresos}</td>
              <td>{entry.egresos}</td>
              <td>{entry.descripcion}</td>
              <td>{entry.categoria}</td>
              <td>{entry.ingresos - entry.egresos}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Typography variant="h6">Total Balance: {totalBalance}</Typography>
    </div>
  );
};

export default TableSection;
