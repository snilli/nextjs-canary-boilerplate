import {Box, Container, Grid} from '@material-ui/core'
import {FC} from 'react'
import Head from 'next/head'
import AccountProfile from '../components/account/AccountProfile'
import AccountProfileDetails from '../components/account/AccountProfileDetails'
import DashboardLayout from '../components/layouts/DashboardLayout'
import WithAuthUser from '../wrapper/WithAuthUser'

const AccountPage: FC = () => (
    <DashboardLayout>
      <Head>
        <title>Account | Material Kit</title>
      </Head>
      <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3,
          }}
      >
        <Container maxWidth='lg'>
          <Grid
              container
              spacing={3}
          >
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
              <AccountProfile />
            </Grid>
            <Grid
                item
                lg={8}
                md={6}
                xs={12}
            >
              <AccountProfileDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
)

export default WithAuthUser()(AccountPage)
