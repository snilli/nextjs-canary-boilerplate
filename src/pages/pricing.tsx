import React from 'react';
import dynamic from 'next/dynamic';

const Pricing = dynamic(import('../components/Pricing'));

export default function PricingPage(): JSX.Element {
    return (
        <Pricing />
    );
}
