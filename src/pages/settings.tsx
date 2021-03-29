import {Box, Container} from '@material-ui/core'
import Head from 'next/head'
import SettingsNotifications from '../components/settings/SettingsNotifications'
import SettingsPassword from '../components/settings/SettingsPassword'
import {FC} from 'react'
import DashboardLayout from '../components/layouts/DashboardLayout'
import WithAuthUser from '../wrapper/WithAuthUser'

const SettingsView: FC = () => (
    <DashboardLayout>
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
    </DashboardLayout>
)

export default WithAuthUser()(SettingsView)
