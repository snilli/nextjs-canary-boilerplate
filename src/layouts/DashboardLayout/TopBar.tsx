import {useState} from 'react'
import {AppBar, Badge, Hidden, IconButton, Toolbar} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import Logo from '../Logo'
import Link from '../../components/Link'

interface Props {
  onMobileNavOpen: () => void
}

const TopBar = ({onMobileNavOpen, ...rest}: Props) => {
  const [notifications] = useState([])

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
          <Hidden mdDown>
            <IconButton color='inherit'>
              <Badge
                  badgeContent={notifications.length}
                  color='primary'
                  variant='dot'
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color='inherit'>
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

export default TopBar
