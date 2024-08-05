import React from 'react';
import { Button, TextField, MenuItem, FormControl, InputLabel, Select, Box, Typography } from '@mui/material';

const CATEGORIES = {
  ingresos: ['Salario', 'Venta', 'Regalo', 'Proyecto freelance', 'Consultoría', 'Bonificación', 'Inversión'],
  egresos: ['Comida', 'Alquiler', 'Transporte', 'Entretenimiento', 'Educación', 'Salud', 'Otros']
};

const AddEntrySection = ({ newEntry, handleChange, handleAddEntry, errors }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>Agregar nueva entrada</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          type="date"
          name="fecha"
          label="Fecha"
          value={newEntry.fecha}
          onChange={handleChange}
          error={!!errors.fecha}
          helperText={errors.fecha}
        />
        <TextField
          type="number"
          name="ingresos"
          label="Ingresos"
          value={newEntry.ingresos}
          onChange={handleChange}
          error={!!errors.ingresos}
          helperText={errors.ingresos}
        />
        <TextField
          type="number"
          name="egresos"
          label="Egresos"
          value={newEntry.egresos}
          onChange={handleChange}
          error={!!errors.egresos}
          helperText={errors.egresos}
        />
        <TextField
          type="text"
          name="descripcion"
          label="Descripción"
          value={newEntry.descripcion}
          onChange={handleChange}
          error={!!errors.descripcion}
          helperText={errors.descripcion}
        />
        <FormControl>
          <InputLabel>Categoría</InputLabel>
          <Select
            name="categoria"
            value={newEntry.categoria}
            onChange={handleChange}
            error={!!errors.categoria}
          >
            <MenuItem value="">
              <em>Seleccione una categoría</em>
            </MenuItem>
            {CATEGORIES.ingresos.concat(CATEGORIES.egresos).map((cat, index) => (
              <MenuItem key={index} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
          {errors.categoria && <Typography color="error">{errors.categoria}</Typography>}
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleAddEntry}>Agregar</Button>
      </Box>
    </div>
  );
};

export default AddEntrySection;
