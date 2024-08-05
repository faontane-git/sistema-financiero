import React, { useState } from 'react';
import Modal from './Modal';
import './Ingresos.css';

const Ingresos = () => {
  const [data, setData] = useState([
    { fecha: '2024-08-01', ingresos: 1000, egresos: 500, descripcion: 'Salario' },
    { fecha: '2024-08-05', ingresos: 200, egresos: 50, descripcion: 'Venta de artículos' },
    { fecha: '2024-08-10', ingresos: 150, egresos: 100, descripcion: 'Regalo' },
    { fecha: '2024-08-15', ingresos: 500, egresos: 300, descripcion: 'Proyecto freelance' },
    { fecha: '2024-08-20', ingresos: 800, egresos: 200, descripcion: 'Consultoría' },
    { fecha: '2024-08-25', ingresos: 600, egresos: 400, descripcion: 'Bonificación' },
    { fecha: '2024-08-28', ingresos: 300, egresos: 150, descripcion: 'Venta de servicios' },
    { fecha: '2024-08-30', ingresos: 700, egresos: 350, descripcion: 'Inversión' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEntry, setNewEntry] = useState({
    fecha: '',
    ingresos: '',
    egresos: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleAddEntry = () => {
    setData([...data, { ...newEntry, ingresos: Number(newEntry.ingresos), egresos: Number(newEntry.egresos) }]);
    setNewEntry({ fecha: '', ingresos: '', egresos: '', descripcion: '' });
    setShowModal(false);
  };

  const totalBalance = data.reduce((acc, entry) => acc + entry.ingresos - entry.egresos, 0);

  return (
    <div className="ingresos-container">
      <h1>Ingresos</h1>
      <p>Esta es la página de ingresos para el mes específico.</p>

      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Ingresos</th>
            <th>Egresos</th>
            <th>Descripción</th>
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
              <td>{entry.ingresos - entry.egresos}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total Balance: {totalBalance}</h2>

      <button onClick={() => setShowModal(true)}>Agregar nueva entrada</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3>Agregar nueva entrada</h3>
          <form className="new-entry-form">
            <input
              type="date"
              name="fecha"
              value={newEntry.fecha}
              onChange={handleChange}
            />
            <input
              type="number"
              name="ingresos"
              placeholder="Ingresos"
              value={newEntry.ingresos}
              onChange={handleChange}
            />
            <input
              type="number"
              name="egresos"
              placeholder="Egresos"
              value={newEntry.egresos}
              onChange={handleChange}
            />
            <input
              type="text"
              name="descripcion"
              placeholder="Descripción"
              value={newEntry.descripcion}
              onChange={handleChange}
            />
            <button type="button" onClick={handleAddEntry}>Agregar</button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Ingresos;
