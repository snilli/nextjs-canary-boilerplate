import React from 'react';
import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Layout = dynamic(import('../components/Layout'));

export default function IndexPage(): JSX.Element {
    return (
        <Layout>
            <Container maxWidth='lg'>
                <Typography
                    variant="h5"
                    component="h1"
                    textAlign='center'
                    sx={{
                        mt: 2,
                    }}
                >
                    Boilerplate !!
                </Typography>
            </Container>
        </Layout>
    );
}
