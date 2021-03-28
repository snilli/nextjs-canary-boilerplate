import {AppProps} from 'next/app'
import MainContextProvider from '../contexts/main/main.context'
import GlobalStyles from '../contexts/global-styles/global-styles.context'
import {ThemeProvider} from '@material-ui/styles'
import theme from '../theme'
import {useEffect} from 'react'
import Head from 'next/head'
import DashboardLayout from '../components/layouts/DashboardLayout'
import {useRouter} from 'next/router'
import MainLayout from '../components/layouts/MainLayout'

const MyApp = ({Component, pageProps}: AppProps) => {
  const router = useRouter()
  const unAuthPath = ['/404', '/register', '/login']

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
        {!unAuthPath.includes(router.pathname) ?
            <ThemeProvider theme={theme}>
              <MainContextProvider>
                <GlobalStyles />
                <DashboardLayout>
                  <Component {...pageProps} />
                </DashboardLayout>
              </MainContextProvider>
            </ThemeProvider> :
            <ThemeProvider theme={theme}>
              <MainContextProvider>
                <GlobalStyles />
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
              </MainContextProvider>
            </ThemeProvider>
        }
      </>
  )
}

export default MyApp
