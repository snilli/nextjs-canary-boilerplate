import { FC } from 'react';
import Typography from '@mui/material/Typography';

const Logo: FC = (): JSX.Element => {
    return (
        <Typography
            variant="h6"
            component='div'
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
        >
            Thailand Poon Poon
        </Typography>
    )
}

export default Logo;
