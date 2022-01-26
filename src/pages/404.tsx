import { Box, Container, Typography } from '@material-ui/core'
import Head from 'next/head'
import { FC } from 'react'

const NotFoundView: FC = () => (
    <>
        <Head>
            <title>404 Page not fount</title>
        </Head>
        <Box
            sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
            }}
        >
            <Container maxWidth="md">
                <Typography align="center" color="textPrimary" variant="h1">
                    404: The page you are looking for isn’t here
                </Typography>
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="subtitle2"
                >
                    You either tried some shady route or you came here by
                    mistake. Whichever it is, try using the navigation
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <img
                        alt="Under development"
                        src="/images/undraw_page_not_found_su7k.svg"
                        style={{
                            marginTop: 50,
                            display: 'inline-block',
                            maxWidth: '100%',
                            width: 560,
                        }}
                    />
                </Box>
            </Container>
        </Box>
    </>
)

export default NotFoundView