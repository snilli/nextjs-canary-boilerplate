import 'reflect-metadata'
import {AppProps} from 'next/app'
import MainContextProvider from '../contexts/main.context'
import GlobalStyles from '../contexts/global-styles.context'
import {ThemeProvider} from '@material-ui/styles'
import theme from '../theme'
import {useEffect} from 'react'
import Head from 'next/head'
import ContainerContextProvider from '../contexts/container.context'
import AuthContextProvider from '../contexts/auth.context'

const MyApp = ({Component, pageProps}: AppProps) => {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
      <>
        <Head>
          <title>My page</title>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        </Head>
        <ContainerContextProvider>
          <AuthContextProvider>
            <ThemeProvider theme={theme}>
              <MainContextProvider>
                <GlobalStyles />
                <Component {...pageProps} />
              </MainContextProvider>
            </ThemeProvider>
          </AuthContextProvider>
        </ContainerContextProvider>
      </>
  )
}

export default MyApp
