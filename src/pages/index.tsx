import React from 'react';
import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';

const Layout = dynamic(import('../components/Layout'));

export default function IndexPage(): JSX.Element {
    return (
        <Layout>
            <Typography variant="h5" component="h1">
                Next.js + TypeScript
            </Typography>
        </Layout>
    );
}
