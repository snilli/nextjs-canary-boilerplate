import {AppProps} from 'next/app'
import MainContextProvider from '../contexts/main/main.context'
import Head from 'next/head'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {

  return (
      <MainContextProvider>
        <Head>
          <title>My page</title>
          <meta
              name='viewport'
              content='minimum-scale=1, initial-scale=1, width=device-width'
          />
        </Head>
        <Component {...pageProps} />
      </MainContextProvider>
  )
}

export default MyApp
