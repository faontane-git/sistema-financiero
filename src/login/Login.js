import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, Alert, Paper } from '@mui/material';
import backgroundImage from '../assets/login-background.png'; // Asegúrate de que la ruta es correcta

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === '' || password === '') {
            setError('Ambos campos son obligatorios');
            return;
        }
        if (username === 'admin' && password === 'admin') {
            navigate('/menu'); // Redirige al menú principal
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Paper
                    elevation={6}
                    sx={{
                        p: 3,
                        width: 320,
                        height: 320,
                        borderRadius: '50%',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h5" component="h1" gutterBottom>
                        Login
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                        ¡Bienvenido!
                    </Typography>
                    {error && <Alert severity="error" sx={{ mb: 1, width: '100%' }}>{error}</Alert>}
                    <form onSubmit={handleSubmit} style={{ width: '80%' }}>
                        <TextField
                            label="Usuario"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{ mb: 1, borderRadius: '50px' }}
                            InputProps={{
                                style: { borderRadius: '50px' }
                            }}
                        />
                        <TextField
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ mb: 2, borderRadius: '50px' }}
                            InputProps={{
                                style: { borderRadius: '50px' }
                            }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth size="small" sx={{ borderRadius: '50px' }}>
                            Iniciar Sesión
                        </Button>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;
