import React from 'react';
import Container from '@mui/material/Container';
import dynamic from 'next/dynamic';

const CopyRight = dynamic(import('../CopyRight'), { ssr: false });

export default function Footer(): JSX.Element {
    return (
        <Container
            maxWidth="lg"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 4,
                py: [2, 4],
            }}
        >
            <CopyRight />
        </Container>
    )
}
