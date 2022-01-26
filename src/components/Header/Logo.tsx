import { FC } from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

const Logo: FC = (): JSX.Element => {
    return (
        <Typography
            variant='h6'
            component='div'
            color="inherit"
            noWrap
            sx={{
                flexGrow: 1,
                fontSize: '1.125rem'
            }}
        >
            <Link href='/'>
                <a>Baby Shark</a>
            </Link>
        </Typography>
    )
}

export default Logo;
