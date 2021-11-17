import React from 'react';
import dynamic from 'next/dynamic';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Logo = dynamic(import('./Logo'));
const Navigation = dynamic(import('./Navigation'));

const inputGlobalStyles = <GlobalStyles styles={{
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },
    a: {
        textDecoration: 'none',
    }
}} />

const Header = (): JSX.Element => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            {inputGlobalStyles}
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Logo />
                <Navigation />
                <Button variant="outlined" color='primary' sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
