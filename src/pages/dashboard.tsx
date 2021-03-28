import {Box, Container, Grid} from '@material-ui/core'
import Head from 'next/head'
import TrafficByDevice from '../components/dashboard/TrafficByDevice'
import LatestProducts from '../components/dashboard/LatestProducts'
import LatestOrders from '../components/dashboard/LatestOrders'
import Sales from '../components/dashboard/Sales'
import TotalProfit from '../components/dashboard/TotalProfit'
import TasksProgress from '../components/dashboard/TasksProgress'
import TotalCustomers from '../components/dashboard/TotalCustomers'
import Budget from '../components/dashboard/Budget'
import {FC} from 'react'

const Dashboard: FC = () => (
    <>
      <Head>
        <title>Dashboard | Material Kit</title>
      </Head>
      <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3,
          }}
      >
        <Container maxWidth={false}>
          <Grid
              container
              spacing={3}
          >
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
              <Budget />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
              <TotalCustomers />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
              <TasksProgress />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
              <TotalProfit sx={{height: '100%'}} />
            </Grid>
            <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
            >
              <Sales />
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
            >
              <TrafficByDevice sx={{height: '100%'}} />
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
            >
              <LatestProducts sx={{height: '100%'}} />
            </Grid>
            <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
            >
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
)

export default Dashboard
