import {nanoid} from 'nanoid'
import moment from 'moment'
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import {FC} from 'react'
import {SxProps} from '@material-ui/system'

interface ProductDto {
  id: string
  name: string
  imageUrl: string
  updatedAt: string
}

const products: ProductDto[] = [
  {
    id: nanoid(20),
    name: 'Dropbox',
    imageUrl: '/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours').fromNow(),
  },
  {
    id: nanoid(20),
    name: 'Medium Corporation',
    imageUrl: '/images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours').fromNow(),
  },
  {
    id: nanoid(20),
    name: 'Slack',
    imageUrl: '/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours').fromNow(),
  },
  {
    id: nanoid(20),
    name: 'Lyft',
    imageUrl: '/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours').fromNow(),
  },
  {
    id: nanoid(20),
    name: 'GitHub',
    imageUrl: '/images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours').fromNow(),
  },
]

interface Props {
  sx: SxProps
}

const LatestProducts: FC<Props> = (props) => (
    <Card {...props}>
      <CardHeader
          subtitle={`${products.length} in total`}
          title='Latest Products'
      />
      <Divider />
      <List>
        {products.map((product, i) => (
            <ListItem
                divider={i < products.length - 1}
                key={product.id}
            >
              <ListItemAvatar>
                <img
                    alt={product.name}
                    src={product.imageUrl}
                    style={{
                      height: 48,
                      width: 48,
                    }}
                />
              </ListItemAvatar>
              <ListItemText
                  primary={product.name}
                  secondary={`Updated ${product.updatedAt}`}
              />
              <IconButton
                  edge='end'
                  size='small'
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
        ))}
      </List>
      <Divider />
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2,
          }}
      >
        <Button
            color='primary'
            endIcon={<ArrowRightIcon />}
            size='small'
            variant='text'
        >
          View all
        </Button>
      </Box>
    </Card>
)

export default LatestProducts
