import {Box, Container} from '@material-ui/core'
import Head from 'next/head'
import SettingsNotifications from '../components/settings/SettingsNotifications'
import SettingsPassword from '../components/settings/SettingsPassword'
import {FC} from 'react'

const SettingsView: FC = () => (
    <>
      <Head>
        <title>Settings | Material Kit</title>
      </Head>
      <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3,
          }}
      >
        <Container maxWidth='lg'>
          <SettingsNotifications />
          <Box sx={{pt: 3}}>
            <SettingsPassword />
          </Box>
        </Container>
      </Box>
    </>
)

export default SettingsView
