import {Box, Container, Grid} from '@material-ui/core'
import {FC} from 'react'
import Head from 'next/head'
import AccountProfile from '../components/account/AccountProfile'
import AccountProfileDetails from '../components/account/AccountProfileDetails'
import DashboardLayout from '../components/layouts/DashboardLayout'
import WithAuthUser from '../components/wrapper/WithAuthUser'
import {useMainContext} from '../contexts/main.context'
import {useAuthContext} from '../contexts/auth.context'

const AccountPage: FC = () => {
  const {mainState} = useMainContext()
  const auth = useAuthContext()
  const currentUser = auth.getUser()
  const user = mainState.user

  if (!currentUser && !user) {
    throw new Error('user not found')
  }

  return (
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
}

export default WithAuthUser()(AccountPage)
