import React from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(import('../Header'));
const Footer = dynamic(import('../Footer'));

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
