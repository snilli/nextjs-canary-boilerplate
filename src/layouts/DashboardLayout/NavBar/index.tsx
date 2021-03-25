import {useEffect} from 'react'
import {Avatar, Box, Button, Divider, Drawer, Hidden, List, makeStyles, Typography} from '@material-ui/core'
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from 'react-feather'
import NavItem from './NavItem'
import {useRouter} from 'next/router'
import Link from '../../../components/Link'

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
}

const items = [
  {
    href: '/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
  },
  {
    href: '/customers',
    icon: UsersIcon,
    title: 'Customers',
  },
  {
    href: '/products',
    icon: ShoppingBagIcon,
    title: 'Products',
  },
  {
    href: '/account',
    icon: UserIcon,
    title: 'Account',
  },
  {
    href: '/settings',
    icon: SettingsIcon,
    title: 'Settings',
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login',
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register',
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error',
  },
]

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}))

interface Props {
  onMobileClose: () => void,
  openMobile: boolean
  className?: string
}

const NavBar = ({onMobileClose, openMobile = false, className}: Props) => {
  const classes = useStyles()
  const router = useRouter()

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
  }, [router.pathname])

  const content = (
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
      >
        <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              p: 2,
            }}
        >
          <Link href='/account'>
            <Avatar
                className={classes.avatar}
                src={user.avatar}
            />
          </Link>
          <Typography className={className} color='textPrimary' variant='h5'>
            {user.name}
          </Typography>
          <Typography color='textSecondary' variant='body2'>
            {user.jobTitle}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{p: 2}}>
          <List>
            {items.map((item) => (
                <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                />
            ))}
          </List>
        </Box>
        <Box sx={{flexGrow: 1}} />
        <Box
            sx={{
              backgroundColor: 'background.default',
              m: 2,
              p: 2,
            }}
        >
          <Typography
              align='center'
              gutterBottom
              variant='h4'
          >
            Need more?
          </Typography>
          <Typography
              align='center'
              variant='body2'
          >
            Upgrade to PRO version and access 20 more screens
          </Typography>
          <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 2,
              }}
          >
            <Button
                color='primary'
                component='a'
                href='https://react-material-kit.devias.io'
                variant='contained'
            >
              See PRO version
            </Button>
          </Box>
        </Box>
      </Box>
  )

  return (
      <>
        <Hidden lgUp>
          <Drawer
              anchor='left'
              classes={{paper: classes.mobileDrawer}}
              onClose={onMobileClose}
              open={openMobile}
              variant='temporary'
          >
            {content}
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
              anchor='left'
              classes={{paper: classes.desktopDrawer}}
              open
              variant='persistent'
          >
            {content}
          </Drawer>
        </Hidden>
      </>
  )
}

export default NavBar
