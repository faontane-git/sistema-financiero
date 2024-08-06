import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import kakeboInterface from '../assets/kakebo-interface.png'; // Importa la imagen

const WelcomeBanner = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                backgroundImage: `url(${kakeboInterface})`, // Usa la imagen importada
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Superposición semi-transparente
                    zIndex: 1,
                }}
            />
            <Container
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    Bienvenido a Kakebo
                </Typography>
                <Typography variant="h5" component="p">
                    Gestiona tus finanzas de manera eficiente y fácil.
                </Typography>
            </Container>
        </Box>
    );
};

export default WelcomeBanner;
