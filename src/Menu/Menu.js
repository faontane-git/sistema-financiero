import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function Menu() {
    return (
        <>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, marginLeft: 240 }}
                >
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </Box>
            </Box>
        </>

    );
}

export default Menu;
