import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

const features = [
    { title: 'Registro de Gastos', description: 'Categoriza y registra todos tus gastos fácilmente.' },
    { title: 'Gráficos Interactivos', description: 'Visualiza tus finanzas con gráficos claros.' },
    { title: 'Objetivos de Ahorro', description: 'Establece y alcanza tus metas de ahorro.' },
];

const Features = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                Características
            </Typography>
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {feature.title}
                                </Typography>
                            </Box>
                            <Typography component="p">
                                {feature.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Features;
