import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Typography, MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from 'recharts';

const initialMetrics = [
    { month: '01', year: '2024', saldoActual: 5000, gastosMes: 1500, ingresosMes: 3000, ahorros: 2000 },
    { month: '02', year: '2024', saldoActual: 5500, gastosMes: 1800, ingresosMes: 3200, ahorros: 2200 },
    { month: '03', year: '2024', saldoActual: 6000, gastosMes: 2000, ingresosMes: 3500, ahorros: 2500 },
    { month: '04', year: '2024', saldoActual: 6300, gastosMes: 1700, ingresosMes: 3400, ahorros: 2700 },
    { month: '05', year: '2024', saldoActual: 6800, gastosMes: 1600, ingresosMes: 3600, ahorros: 3000 },
    { month: '06', year: '2024', saldoActual: 7000, gastosMes: 1900, ingresosMes: 3800, ahorros: 3200 },
    { month: '07', year: '2024', saldoActual: 7200, gastosMes: 2000, ingresosMes: 3900, ahorros: 3300 },
    { month: '08', year: '2024', saldoActual: 7500, gastosMes: 2100, ingresosMes: 4000, ahorros: 3500 },
    { month: '09', year: '2024', saldoActual: 8000, gastosMes: 2200, ingresosMes: 4200, ahorros: 3800 },
    { month: '10', year: '2024', saldoActual: 8500, gastosMes: 2300, ingresosMes: 4400, ahorros: 4000 },
    { month: '11', year: '2024', saldoActual: 9000, gastosMes: 2400, ingresosMes: 4500, ahorros: 4200 },
    { month: '12', year: '2024', saldoActual: 9500, gastosMes: 2500, ingresosMes: 4700, ahorros: 4500 },
];

const Dashboard = () => {
    const [metrics, setMetrics] = useState(initialMetrics);
    const [selectedMonth, setSelectedMonth] = useState('01');
    const [selectedYear, setSelectedYear] = useState('2024');
    const [showGeneralBalance, setShowGeneralBalance] = useState(false);

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleToggleBalance = () => {
        setShowGeneralBalance(!showGeneralBalance);
    };

    const filteredMetrics = metrics.filter(metric => metric.month === selectedMonth && metric.year === selectedYear);
    const yearlyMetrics = metrics.filter(metric => metric.year === selectedYear);

    const totalSaldo = yearlyMetrics.reduce((sum, metric) => sum + metric.saldoActual, 0);
    const totalGastos = yearlyMetrics.reduce((sum, metric) => sum + metric.gastosMes, 0);
    const totalIngresos = yearlyMetrics.reduce((sum, metric) => sum + metric.ingresosMes, 0);
    const totalAhorros = yearlyMetrics.reduce((sum, metric) => sum + metric.ahorros, 0);

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Bienvenido, [Usuario]
                </Typography>
                {!showGeneralBalance && (
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
                )}
                <Button variant="contained" color="secondary" onClick={handleToggleBalance}>
                    {showGeneralBalance ? 'Ocultar Balance General' : 'Mostrar Balance General'}
                </Button>
                {!showGeneralBalance ? (
                    <>
                        {filteredMetrics.map((metric, index) => (
                            <Box key={index} sx={{ my: 4 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Paper sx={{ p: 3, textAlign: 'center', background: '#1976d2', color: 'white' }}>
                                            <Typography variant="h6">Saldo Actual</Typography>
                                            <Typography variant="h4">${metric.saldoActual}</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Paper sx={{ p: 3, textAlign: 'center', background: '#1976d2', color: 'white' }}>
                                            <Typography variant="h6">Gastos del Mes</Typography>
                                            <Typography variant="h4">${metric.gastosMes}</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Paper sx={{ p: 3, textAlign: 'center', background: '#1976d2', color: 'white' }}>
                                            <Typography variant="h6">Ingresos del Mes</Typography>
                                            <Typography variant="h4">${metric.ingresosMes}</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Paper sx={{ p: 3, textAlign: 'center', background: '#1976d2', color: 'white' }}>
                                            <Typography variant="h6">Ahorros</Typography>
                                            <Typography variant="h4">${metric.ahorros}</Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" gutterBottom>
                                Comparación de Ingresos y Gastos
                            </Typography>
                            <Paper sx={{ p: 2 }}>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={filteredMetrics}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="ingresosMes" fill="#8884d8" />
                                        <Bar dataKey="gastosMes" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Paper>
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" gutterBottom>
                                Resumen Mensual
                            </Typography>
                            <Paper sx={{ p: 2 }}>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={filteredMetrics}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="saldoActual" stroke="#8884d8" />
                                        <Line type="monotone" dataKey="ahorros" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Paper>
                        </Box>
                    </>
                ) : (
                    <Box sx={{ my: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper sx={{ p: 3, textAlign: 'center', background: '#1976d2', color: 'white' }}>
                                    <Typography variant="h6">Total Saldo</Typography>
                                    <Typography variant="h4">${totalSaldo}</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper sx={{ p: 3, textAlign: 'center', background: '#1976d2', color: 'white' }}>
                                    <Typography variant="h6">Total Gastos</Typography>
                                    <Typography variant="h4">${totalGastos}</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper sx={{ p: 3, textAlign: 'center', background: '#1976d2', color: 'white' }}>
                                    <Typography variant="h6">Total Ingresos</Typography>
                                    <Typography variant="h4">${totalIngresos}</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper sx={{ p: 3, textAlign: 'center', background: '#1976d2', color: 'white' }}>
                                    <Typography variant="h6">Total Ahorros</Typography>
                                    <Typography variant="h4">${totalAhorros}</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" gutterBottom>
                                Balance General del Año
                            </Typography>
                            <Paper sx={{ p: 2 }}>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={yearlyMetrics}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="saldoActual" stroke="#8884d8" />
                                        <Line type="monotone" dataKey="ahorros" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Paper>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default Dashboard;
