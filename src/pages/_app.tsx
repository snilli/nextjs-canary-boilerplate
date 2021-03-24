import {AppProps} from 'next/app'
import MainContextProvider from '../contexts/main/main.context'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => (
    <MainContextProvider>
      <Component {...pageProps} />
    </MainContextProvider>
)

export default MyApp
