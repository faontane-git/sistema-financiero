import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import Modal from './Modal';
import ChartSection from './ChartSection';
import TableSection from './TableSection';
import AddEntrySection from './AddEntrySection';
import './Ingresos.css';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Ingresos = () => {
  const [data, setData] = useState([
    { fecha: '2024-08-01', ingresos: 1000, egresos: 500, descripcion: 'Salario', categoria: 'Salario' },
    { fecha: '2024-08-05', ingresos: 200, egresos: 50, descripcion: 'Venta de artículos', categoria: 'Venta' },
    { fecha: '2024-08-10', ingresos: 150, egresos: 100, descripcion: 'Regalo', categoria: 'Regalo' },
    { fecha: '2024-08-15', ingresos: 500, egresos: 300, descripcion: 'Proyecto freelance', categoria: 'Proyecto freelance' },
    { fecha: '2024-08-20', ingresos: 800, egresos: 200, descripcion: 'Consultoría', categoria: 'Consultoría' },
    { fecha: '2024-08-25', ingresos: 600, egresos: 400, descripcion: 'Bonificación', categoria: 'Bonificación' },
    { fecha: '2024-08-28', ingresos: 300, egresos: 150, descripcion: 'Venta de servicios', categoria: 'Venta' },
    { fecha: '2024-08-30', ingresos: 700, egresos: 350, descripcion: 'Inversión', categoria: 'Inversión' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEntry, setNewEntry] = useState({
    fecha: '',
    ingresos: '',
    egresos: '',
    descripcion: '',
    categoria: ''
  });

  const [errors, setErrors] = useState({});
  const [activeSection, setActiveSection] = useState('chart');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });

    // Validación en tiempo real
    if (value === '') {
      setErrors({ ...errors, [name]: 'Este campo es obligatorio' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleAddEntry = () => {
    const { fecha, ingresos, egresos, descripcion, categoria } = newEntry;

    if (!fecha || !ingresos || !egresos || !descripcion || !categoria) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const ingresosNumber = Number(ingresos);
    const egresosNumber = Number(egresos);

    if (isNaN(ingresosNumber) || isNaN(egresosNumber) || ingresosNumber < 0 || egresosNumber < 0) {
      alert("Los ingresos y egresos deben ser números positivos.");
      return;
    }

    setData([...data, { ...newEntry, ingresos: ingresosNumber, egresos: egresosNumber }]);
    setNewEntry({ fecha: '', ingresos: '', egresos: '', descripcion: '', categoria: '' });
    setShowModal(false);
  };

  return (
    <div className="ingresos-container">
      <Typography variant="h4" gutterBottom>Ingresos y Egresos</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 2 }}>
        <Button variant="contained" onClick={() => setActiveSection('chart')}>Mostrar Gráfica</Button>
        <Button variant="contained" onClick={() => setActiveSection('table')}>Mostrar Tabla</Button>
        <Button variant="contained" onClick={() => setShowModal(true)}>Agregar nueva entrada</Button>
      </Box>

      {activeSection === 'chart' && <ChartSection data={data} />}
      {activeSection === 'table' && <TableSection data={data} />}

      {/*
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <AddEntrySection
          newEntry={newEntry}
          handleChange={handleChange}
          handleAddEntry={handleAddEntry}
          errors={errors}
        />
      </Modal>
      */}
    </div>
  );
};

export default Ingresos;
