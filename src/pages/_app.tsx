import {AppProps} from 'next/app'
import MainContextProvider from '../contexts/main/main.context'
import GlobalStyles from '../contexts/global-styles/global-styles.context'
import {ThemeProvider} from '@material-ui/styles'
import theme from '../theme'
import React from 'react'
import MainLayout from '../layouts/MainLayout'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => (
    <ThemeProvider theme={theme}>
      <MainContextProvider>
        <GlobalStyles />
        <MainLayout />
        <Component {...pageProps} />
      </MainContextProvider>
    </ThemeProvider>
)

export default MyApp
