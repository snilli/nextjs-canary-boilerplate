import React from 'react';
import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';

const Layout = dynamic(import('../components/Layout'));

export default function PricingPage(): JSX.Element {
    return (
        <Layout>
            <Typography variant="h5" component="h1">
                PricingPage
            </Typography>
        </Layout>
    );
}
