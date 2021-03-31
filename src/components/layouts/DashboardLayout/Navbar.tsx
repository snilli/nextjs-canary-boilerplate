import {FC, useState} from 'react'
import {AppBar, Badge, Box, Hidden, IconButton, Toolbar} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import Logo from '../Logo'
import Link from '../../Link'
import {useAuthContext} from '../../../contexts/auth.context'

interface Props {
  onMobileNavOpen: () => void
}

const DashboardNavbar: FC<Props> = ({onMobileNavOpen, ...rest}) => {
  const auth = useAuthContext()
  const [notifications] = useState([])

  const handleLogout = async () => {
    await auth.signOut()
  }

  return (
      <AppBar
          elevation={0}
          {...rest}
      >
        <Toolbar>
          <Link href='/'>
            <Logo />
          </Link>
          <Box sx={{flexGrow: 1}} />
          <Hidden lgDown>
            <IconButton color='inherit'>
              <Badge
                  badgeContent={notifications.length}
                  color='primary'
                  variant='dot'
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color='inherit' onClick={handleLogout}>
              <InputIcon />
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton
                color='inherit'
                onClick={onMobileNavOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
  )
}

export default DashboardNavbar
