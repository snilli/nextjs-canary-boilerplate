import {Box, Container, Typography} from '@material-ui/core'
import Head from 'next/head'
import {FC} from 'react'

const NotFoundView: FC = () => (
    <div className='container'>
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
        <Container maxWidth='md'>
          <Typography
              align='center'
              color='textPrimary'
              variant='h1'
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
              align='center'
              color='textPrimary'
              variant='subtitle2'
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Box sx={{textAlign: 'center'}}>
            <img
                alt='Under development'
                src='/static/images/undraw_page_not_found_su7k.svg'
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

      <style jsx>{`
        .container {
          min-height: calc(100vh - 64px);
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
)

export default NotFoundView
