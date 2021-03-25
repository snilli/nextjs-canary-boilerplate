import {AppProps} from 'next/app'
import MainContextProvider from '../contexts/main/main.context'
import GlobalStyles from '../contexts/global-styles/global-styles.context'
import {ThemeProvider} from '@material-ui/styles'
import theme from '../theme'
import MainLayout from '../layouts/MainLayout'
import {Head} from 'next/document'
import {useEffect} from 'react'

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
        <ThemeProvider theme={theme}>
          <MainContextProvider>
            <GlobalStyles />
            <MainLayout />
            <Component {...pageProps} />
          </MainContextProvider>
        </ThemeProvider>
      </>
  )
}

export default MyApp
