import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import Link from '@mui/material/Link';

interface NavLinkProps extends LinkProps {
    children: React.ReactNode;
}

export default function NavLink(props: NavLinkProps): JSX.Element {
    return (
        <NextLink {...props}>
            <Link
                variant='button'
                color='inherit'
                sx={{
                    my: 1,
                    mx: 1.5,
                    cursor: 'pointer',
                    '&:hover': {
                        color: 'text.secondary'
                    }
                }}
            >
                {props.children}
            </Link>
        </NextLink>
    )
}
