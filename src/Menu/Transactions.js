import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const initialTransactions = [
    { date: '2024-01-01', description: 'Compra en supermercado', amount: -50, category: 'Alimentación', month: '01', year: '2024' },
    { date: '2024-01-02', description: 'Venta de artículo', amount: 100, category: 'Ventas', month: '01', year: '2024' },
    { date: '2024-01-03', description: 'Pago de alquiler', amount: -500, category: 'Vivienda', month: '01', year: '2024' },
    { date: '2024-01-04', description: 'Cena en restaurante', amount: -70, category: 'Entretenimiento', month: '01', year: '2024' },
];

const categories = ['Alimentación', 'Transporte', 'Entretenimiento', 'Educación', 'Vivienda', 'Salud', 'Vestimenta', 'Ahorro', 'Otros', 'Ventas'];

const Transactions = () => {
    const [transactions, setTransactions] = useState(initialTransactions);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [newTransaction, setNewTransaction] = useState({
        date: '',
        description: '',
        amount: '',
        category: '',
        month: '',
        year: '',
    });
    const [selectedMonth, setSelectedMonth] = useState('01');
    const [selectedYear, setSelectedYear] = useState('2024');

    const handleClickOpen = (index = null) => {
        if (index !== null) {
            setNewTransaction(transactions[index]);
            setCurrentIndex(index);
            setEditMode(true);
        } else {
            setNewTransaction({ date: '', description: '', amount: '', category: '', month: selectedMonth, year: selectedYear });
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
        setNewTransaction({ ...newTransaction, [name]: value });
    };

    const handleAddTransaction = () => {
        setTransactions([...transactions, newTransaction]);
        setNewTransaction({ date: '', description: '', amount: '', category: '', month: '', year: '' });
        setOpen(false);
    };

    const handleEditTransaction = () => {
        const updatedTransactions = transactions.map((transaction, index) =>
            index === currentIndex ? newTransaction : transaction
        );
        setTransactions(updatedTransactions);
        setNewTransaction({ date: '', description: '', amount: '', category: '', month: '', year: '' });
        setOpen(false);
        setEditMode(false);
        setCurrentIndex(null);
    };

    const handleDeleteTransaction = (index) => {
        const newTransactions = [...transactions];
        newTransactions.splice(index, 1);
        setTransactions(newTransactions);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const filteredTransactions = transactions.filter(transaction => transaction.month === selectedMonth && transaction.year === selectedYear);

    const totalAmount = filteredTransactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Transacciones
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
                                Agregar Transacción
                            </Button>
                        </Grid>
                    </Grid>
                    <TableContainer component={Paper} sx={{ mt: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Fecha</TableCell>
                                    <TableCell>Descripción</TableCell>
                                    <TableCell>Categoría</TableCell>
                                    <TableCell align="right">Monto</TableCell>
                                    <TableCell align="right">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredTransactions.map((transaction, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{transaction.date}</TableCell>
                                        <TableCell>{transaction.description}</TableCell>
                                        <TableCell>{transaction.category}</TableCell>
                                        <TableCell align="right" sx={{ color: transaction.amount < 0 ? 'red' : 'green' }}>
                                            {transaction.amount < 0 ? `-$${Math.abs(transaction.amount)}` : `$${transaction.amount}`}
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton onClick={() => handleClickOpen(index)} color="primary">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleDeleteTransaction(index)} color="secondary">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ mt: 2, p: 2 }}>
                        <Typography variant="h6">Total Monto: ${totalAmount}</Typography>
                    </Box>
                </Paper>
            </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editMode ? 'Editar Transacción' : 'Agregar Nueva Transacción'}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="date"
                        label="Fecha"
                        type="date"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        value={newTransaction.date}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="description"
                        label="Descripción"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={newTransaction.description}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="amount"
                        label="Monto"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={newTransaction.amount}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel>Categoría</InputLabel>
                        <Select
                            name="category"
                            value={newTransaction.category}
                            onChange={handleChange}
                            label="Categoría"
                        >
                            {categories.map((category, index) => (
                                <MenuItem key={index} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel>Mes</InputLabel>
                        <Select
                            name="month"
                            value={newTransaction.month}
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
                            value={newTransaction.year}
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
                    <Button onClick={editMode ? handleEditTransaction : handleAddTransaction} color="primary">
                        {editMode ? 'Guardar Cambios' : 'Agregar'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Transactions;
