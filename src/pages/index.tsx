import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(import('../components/Layout'));
const Home = dynamic(import('../components/Home'));

export default function IndexPage(): JSX.Element {
    return (
        <Layout title='Home'>
            <Home />
        </Layout>
    );
}
