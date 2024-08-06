import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };
    return (
        <AppBar position="static" sx={{ bgcolor: '#34495e' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Kakebo
                </Typography>
                <Button color="inherit" onClick={handleLogin}>
                    Login
                </Button>
                <Button color="inherit" onClick={handleRegister}>
                    Register
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
