import React from 'react';
import dynamic from 'next/dynamic';

const Helmet = dynamic(import('../Helmet'));
const Header = dynamic(import('../Header'));
const Footer = dynamic(import('../Footer'));

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

const Layout = (props: LayoutProps): JSX.Element => {
    const { children, title } = props;
    return (
        <>
            {title && <Helmet title={title} />}
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
