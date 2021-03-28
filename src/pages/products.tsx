import {Box, Container, Grid, Pagination} from '@material-ui/core'
import Head from 'next/head'
import ProductListToolbar from '../components/product/ProductListToolbar'
import ProductCard from '../components/product/ProductCard'
import products from '../components/product/product-dto'
import {FC} from 'react'

const Products: FC = () => (
    <>
      <Head>
        <title>Products | Material Kit</title>
      </Head>
      <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3,
          }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{pt: 3}}>
            <Grid
                container
                spacing={3}
            >
              {products.map((product) => (
                  <Grid
                      item
                      key={product.id}
                      lg={4}
                      md={6}
                      xs={12}
                  >
                    <ProductCard product={product} />
                  </Grid>
              ))}
            </Grid>
          </Box>
          <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 3,
              }}
          >
            <Pagination
                color='primary'
                count={3}
                size='small'
            />
          </Box>
        </Container>
      </Box>
    </>
)

export default Products
