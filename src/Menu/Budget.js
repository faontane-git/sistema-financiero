import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const initialBudgetCategories = [
    { category: 'Alimentación', planned: 500, actual: 450, month: '01', year: '2024' },
    { category: 'Transporte', planned: 200, actual: 220, month: '01', year: '2024' },
    { category: 'Entretenimiento', planned: 150, actual: 100, month: '01', year: '2024' },
    { category: 'Educación', planned: 300, actual: 320, month: '01', year: '2024' },
    { category: 'Vivienda', planned: 800, actual: 750, month: '01', year: '2024' },
    { category: 'Salud', planned: 200, actual: 180, month: '01', year: '2024' },
    { category: 'Vestimenta', planned: 100, actual: 90, month: '01', year: '2024' },
    { category: 'Ahorro', planned: 400, actual: 400, month: '01', year: '2024' },
    { category: 'Otros', planned: 100, actual: 50, month: '01', year: '2024' },
];

const Budget = () => {
    const [budgetCategories, setBudgetCategories] = useState(initialBudgetCategories);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [newCategory, setNewCategory] = useState({
        category: '',
        planned: '',
        actual: '',
        month: '',
        year: '',
    });
    const [selectedMonth, setSelectedMonth] = useState('01');
    const [selectedYear, setSelectedYear] = useState('2024');

    const handleClickOpen = (index = null) => {
        if (index !== null) {
            setNewCategory(budgetCategories[index]);
            setCurrentIndex(index);
            setEditMode(true);
        } else {
            setNewCategory({ category: '', planned: '', actual: '', month: selectedMonth, year: selectedYear });
            setEditMode(false);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditMode(false);
        setCurrentIndex(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCategory({ ...newCategory, [name]: value });
    };

    const handleAddCategory = () => {
        setBudgetCategories([...budgetCategories, newCategory]);
        setNewCategory({ category: '', planned: '', actual: '', month: '', year: '' });
        setOpen(false);
    };

    const handleEditCategory = () => {
        const updatedCategories = budgetCategories.map((category, index) =>
            index === currentIndex ? newCategory : category
        );
        setBudgetCategories(updatedCategories);
        setNewCategory({ category: '', planned: '', actual: '', month: '', year: '' });
        setOpen(false);
        setEditMode(false);
        setCurrentIndex(null);
    };

    const handleDeleteCategory = (index) => {
        const newCategories = [...budgetCategories];
        newCategories.splice(index, 1);
        setBudgetCategories(newCategories);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const filteredCategories = budgetCategories.filter(category => category.month === selectedMonth && category.year === selectedYear);

    const totalPlanned = filteredCategories.reduce((sum, category) => sum + parseFloat(category.planned), 0);
    const totalActual = filteredCategories.reduce((sum, category) => sum + parseFloat(category.actual), 0);
    const patrimonio = totalPlanned - totalActual;

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Presupuesto
                </Typography>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Mes</InputLabel>
                            <Select
                                value={selectedMonth}
                                onChange={handleMonthChange}
                                label="Mes"
                            >
                                <MenuItem value={'01'}>Enero</MenuItem>
                                <MenuItem value={'02'}>Febrero</MenuItem>
                                <MenuItem value={'03'}>Marzo</MenuItem>
                                <MenuItem value={'04'}>Abril</MenuItem>
                                <MenuItem value={'05'}>Mayo</MenuItem>
                                <MenuItem value={'06'}>Junio</MenuItem>
                                <MenuItem value={'07'}>Julio</MenuItem>
                                <MenuItem value={'08'}>Agosto</MenuItem>
                                <MenuItem value={'09'}>Septiembre</MenuItem>
                                <MenuItem value={'10'}>Octubre</MenuItem>
                                <MenuItem value={'11'}>Noviembre</MenuItem>
                                <MenuItem value={'12'}>Diciembre</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Año</InputLabel>
                            <Select
                                value={selectedYear}
                                onChange={handleYearChange}
                                label="Año"
                            >
                                <MenuItem value={'2023'}>2023</MenuItem>
                                <MenuItem value={'2024'}>2024</MenuItem>
                                <MenuItem value={'2025'}>2025</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Paper sx={{ p: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={() => handleClickOpen()}>
                                Agregar Categoría
                            </Button>
                        </Grid>
                    </Grid>
                    <TableContainer component={Paper} sx={{ mt: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Categoría</TableCell>
                                    <TableCell align="right">Planeado</TableCell>
                                    <TableCell align="right">Actual</TableCell>
                                    <TableCell align="right">Diferencia</TableCell>
                                    <TableCell align="right">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredCategories.map((category, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{category.category}</TableCell>
                                        <TableCell align="right">${category.planned}</TableCell>
                                        <TableCell align="right" sx={{ color: category.actual > category.planned ? 'red' : 'green' }}>
                                            ${category.actual}
                                        </TableCell>
                                        <TableCell align="right" sx={{ color: category.actual > category.planned ? 'red' : 'green' }}>
                                            ${category.actual - category.planned}
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton onClick={() => handleClickOpen(index)} color="primary">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleDeleteCategory(index)} color="secondary">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ mt: 2, p: 2 }}>
                        <Typography variant="h6">Total Planeado: ${totalPlanned}</Typography>
                        <Typography variant="h6">Total Actual: ${totalActual}</Typography>
                        <Typography variant="h6" sx={{ color: patrimonio < 0 ? 'red' : 'green' }}>
                            Patrimonio: ${patrimonio}
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editMode ? 'Editar Categoría' : 'Agregar Nueva Categoría'}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="category"
                        label="Categoría"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={newCategory.category}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="planned"
                        label="Planeado"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={newCategory.planned}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="actual"
                        label="Actual"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={newCategory.actual}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel>Mes</InputLabel>
                        <Select
                            name="month"
                            value={newCategory.month}
                            onChange={handleChange}
                            label="Mes"
                        >
                            <MenuItem value={'01'}>Enero</MenuItem>
                            <MenuItem value={'02'}>Febrero</MenuItem>
                            <MenuItem value={'03'}>Marzo</MenuItem>
                            <MenuItem value={'04'}>Abril</MenuItem>
                            <MenuItem value={'05'}>Mayo</MenuItem>
                            <MenuItem value={'06'}>Junio</MenuItem>
                            <MenuItem value={'07'}>Julio</MenuItem>
                            <MenuItem value={'08'}>Agosto</MenuItem>
                            <MenuItem value={'09'}>Septiembre</MenuItem>
                            <MenuItem value={'10'}>Octubre</MenuItem>
                            <MenuItem value={'11'}>Noviembre</MenuItem>
                            <MenuItem value={'12'}>Diciembre</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel>Año</InputLabel>
                        <Select
                            name="year"
                            value={newCategory.year}
                            onChange={handleChange}
                            label="Año"
                        >
                            <MenuItem value={'2023'}>2023</MenuItem>
                            <MenuItem value={'2024'}>2024</MenuItem>
                            <MenuItem value={'2025'}>2025</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={editMode ? handleEditCategory : handleAddCategory} color="primary">
                        {editMode ? 'Guardar Cambios' : 'Agregar'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Budget;
