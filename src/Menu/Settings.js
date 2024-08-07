import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Typography, TextField, Button, Divider } from '@mui/material';

const Settings = () => {
    const [profile, setProfile] = useState({
        username: 'usuario',
        email: 'usuario@ejemplo.com',
    });

    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // Lógica para actualizar el perfil
        console.log('Perfil actualizado:', profile);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwords.newPassword !== passwords.confirmPassword) {
            console.error('Las nuevas contraseñas no coinciden');
            return;
        }
        // Lógica para cambiar la contraseña
        console.log('Contraseña cambiada:', passwords);
    };

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Configuración
                </Typography>
                <Paper sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Perfil de Usuario
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <form onSubmit={handleProfileSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Nombre de Usuario"
                                    variant="outlined"
                                    fullWidth
                                    name="username"
                                    value={profile.username}
                                    onChange={handleProfileChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Correo Electrónico"
                                    variant="outlined"
                                    fullWidth
                                    name="email"
                                    value={profile.email}
                                    onChange={handleProfileChange}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                            Actualizar Perfil
                        </Button>
                    </form>
                </Paper>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Cambiar Contraseña
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <form onSubmit={handlePasswordSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Contraseña Actual"
                                    variant="outlined"
                                    fullWidth
                                    type="password"
                                    name="currentPassword"
                                    value={passwords.currentPassword}
                                    onChange={handlePasswordChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Nueva Contraseña"
                                    variant="outlined"
                                    fullWidth
                                    type="password"
                                    name="newPassword"
                                    value={passwords.newPassword}
                                    onChange={handlePasswordChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Confirmar Nueva Contraseña"
                                    variant="outlined"
                                    fullWidth
                                    type="password"
                                    name="confirmPassword"
                                    value={passwords.confirmPassword}
                                    onChange={handlePasswordChange}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                            Cambiar Contraseña
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default Settings;
