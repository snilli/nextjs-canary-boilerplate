import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import Link from '@mui/material/Link';

interface NavLinkProps extends LinkProps {
    children: React.ReactNode;
}

export default React.memo(function NavLink(props: NavLinkProps): JSX.Element {
    return (
        <NextLink {...props}>
            <Link
                variant='h6'
                color='primary'
                sx={{
                    my: 1,
                    mx: 1.5,
                    cursor: 'pointer',
                    fontWeight: 600,
                    '&:hover': {
                        color: (theme) => theme.palette.secondary.main,
                    }
                }}
            >
                {props.children}
            </Link>
        </NextLink>
    )
})
