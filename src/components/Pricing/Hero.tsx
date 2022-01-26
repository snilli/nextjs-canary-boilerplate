import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Hero(): JSX.Element {
    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Pricing
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
                Quickly build an effective pricing table for your potential customers with
                this layout. It&apos;s built with default MUI components with little
                customization.
            </Typography>
        </Container>
    )
}