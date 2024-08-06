import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#34495e', color: 'white', py: 3 }}>
            <Container>
                <Typography variant="body1" align="center">
                    © 2024 Fabrizzio Soft Solutions. Todos los derechos reservados.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
