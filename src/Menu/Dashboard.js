import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
    const metrics = [
        { title: 'Saldo Actual', value: '$5000' },
        { title: 'Gastos del Mes', value: '$1500' },
        { title: 'Ingresos del Mes', value: '$3000' },
        { title: 'Ahorros', value: '$2000' },
    ];

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Bienvenido, [Usuario]
                </Typography>
                <Grid container spacing={3}>
                    {metrics.map((metric, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper sx={{ p: 2, textAlign: 'center' }}>
                                <Typography variant="h6">{metric.title}</Typography>
                                <Typography variant="h4">{metric.value}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Actividad Reciente
                </Typography>
                <Paper sx={{ p: 2 }}>
                    <Typography>Transacción 1</Typography>
                    <Typography>Transacción 2</Typography>
                    <Typography>Transacción 3</Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Dashboard;
