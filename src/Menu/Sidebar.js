import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BudgetIcon from '@mui/icons-material/AccountBalanceWallet';
import ReportIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Transacciones', icon: <ReceiptIcon /> },
        { text: 'Presupuesto', icon: <BudgetIcon /> },
        { text: 'Informes', icon: <ReportIcon /> },
        { text: 'Configuración', icon: <SettingsIcon /> },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
