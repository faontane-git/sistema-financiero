import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Typography } from '@mui/material';

const ChartSection = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.fecha),
    datasets: [
      {
        label: 'Ingresos',
        data: data.map(entry => entry.ingresos),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Egresos',
        data: data.map(entry => entry.egresos),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>Gráfica de Ingresos y Egresos</Typography>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
  );
};

export default ChartSection;
