import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(import('../components/Layout'));
const Pricing = dynamic(import('../components/Pricing'));

export default function PricingPage(): JSX.Element {
    return (
        <Layout title='Pricing'>
            <Pricing />
        </Layout>
    );
}
