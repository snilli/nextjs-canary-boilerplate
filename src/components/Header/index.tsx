import React from 'react';
import dynamic from 'next/dynamic';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Logo = dynamic(import('./Logo'));
const Navigation = dynamic(import('./Navigation'));

const Header = (): JSX.Element => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Logo />
                <Navigation />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
