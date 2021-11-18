import { FC } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home: FC = () => {
    return (
        <Container maxWidth='lg'>
            <Typography
                variant="h5"
                component="h1"
                textAlign='center'
                sx={{
                    mt: 2,
                }}
            >
                Boilerplate !!
            </Typography>
        </Container>
    )
}

export default Home;
