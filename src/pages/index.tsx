import React from 'react';
import dynamic from 'next/dynamic';

const Home = dynamic(import('../components/Home'));

export default function IndexPage(): JSX.Element {
    return (
        <Home />
    );
}
