import React from 'react';
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from 'recharts';
import jsPDF from 'jspdf';

const data = [
    { month: 'Enero', ingresos: 4000, gastos: 2400 },
    { month: 'Febrero', ingresos: 3000, gastos: 1398 },
    { month: 'Marzo', ingresos: 2000, gastos: 9800 },
    { month: 'Abril', ingresos: 2780, gastos: 3908 },
    { month: 'Mayo', ingresos: 1890, gastos: 4800 },
    { month: 'Junio', ingresos: 2390, gastos: 3800 },
    { month: 'Julio', ingresos: 3490, gastos: 4300 },
];

const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Resumen Mensual', 20, 20);
    let y = 30;

    data.forEach((item) => {
        doc.text(`${item.month}: Ingresos - $${item.ingresos}, Gastos - $${item.gastos}`, 20, y);
        y += 10;
    });

    doc.save('informe.pdf');
};

const Reports = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Informes
                </Typography>
                <Paper sx={{ p: 2, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Resumen Mensual
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="ingresos" stroke="#8884d8" />
                            <Line type="monotone" dataKey="gastos" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Comparación de Ingresos y Gastos
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="ingresos" fill="#8884d8" />
                            <Bar dataKey="gastos" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </Paper>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={generatePDF}>
                            Generar Informe
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Reports;
