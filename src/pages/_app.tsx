import {AppProps} from 'next/app'
import MainContextProvider from '../contexts/main/main.context'
import DashboardLayout from '../layouts/DashboardLayout'
import GlobalStyles from '../components/GlobalStyles'
import {ThemeProvider} from '@material-ui/styles'
import theme from '../theme'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContextProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </MainContextProvider>
    </ThemeProvider>
)

export default MyApp
