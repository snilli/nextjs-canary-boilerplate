import {Box, Container} from '@material-ui/core'
import Head from 'next/head'
import CustomerListToolbar from '../components/customer/CustomerListToolbar'
import CustomerListResults from '../components/customer/CustomerListResults'
import customers from '../components/customer/customer-dto'
import {FC} from 'react'
import DashboardLayout from '../components/layouts/DashboardLayout'
import WithAuthUser from '../wrapper/WithAuthUser'

const CustomerListPage: FC = () => (
    <DashboardLayout>
      <Head>
        <title>Customers | Material Kit</title>
      </Head>
      <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3,
          }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{pt: 3}}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
)

export default WithAuthUser()(CustomerListPage)
