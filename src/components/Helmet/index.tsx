import React from 'react';
import Head from 'next/head';

interface HelmetProps {
    title: string;
}

export default function Helmet(props: HelmetProps): JSX.Element {
    const { title } = props;
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}
