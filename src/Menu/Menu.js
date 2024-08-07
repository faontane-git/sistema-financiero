import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Budget from './Budget';
import Reports from './Reports';
import Settings from './Settings';
import backgroundImage from '../assets/background-image.png'; // Asegúrate de que la ruta es correcta

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('Dashboard');

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navigate = (page) => {
        setCurrentPage(page);
        setOpen(false); // Close the sidebar after navigation
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Transactions':
                return <Transactions />;
            case 'Budget':
                return <Budget />;
            case 'Reports':
                return <Reports />;
            case 'Settings':
                return <Settings />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <>
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Box
                sx={{
                    display: 'flex',
                    mt: 8,
                    //backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            >
                <Sidebar open={open} handleDrawerClose={handleDrawerClose} navigate={navigate} />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, marginLeft: open ? 240 : 0, transition: 'margin-left 0.3s' }}
                >
                    {renderPage()}
                </Box>
            </Box>
        </>
    );
};

export default Menu;
