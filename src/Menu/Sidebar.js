import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BudgetIcon from '@mui/icons-material/AccountBalanceWallet';
import ReportIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ open, handleDrawerClose, navigate }) => {
    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, page: 'Dashboard' },
        { text: 'Transacciones', icon: <ReceiptIcon />, page: 'Transactions' },
        { text: 'Presupuesto', icon: <BudgetIcon />, page: 'Budget' },
        { text: 'Informes', icon: <ReportIcon />, page: 'Reports' },
        { text: 'Configuración', icon: <SettingsIcon />, page: 'Settings' },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: open ? 240 : 0,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: open ? 240 : 0,
                    boxSizing: 'border-box',
                    transition: 'width 0.3s',
                    background: '#34495e',
                    color: 'white'
                },
            }}
            open={open}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 8px' }}>
                <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                    <ChevronLeftIcon />
                </IconButton>
            </Box>
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => navigate(item.page)}>
                        <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
