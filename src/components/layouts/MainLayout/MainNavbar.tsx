import {AppBar, Toolbar} from '@material-ui/core'
import {FC} from 'react'
import Logo from '../Logo'
import Link from 'next/link'

const MainNavbar: FC = (props) => (
    <AppBar
        elevation={0}
        {...props}
    >
      <Toolbar sx={{height: 64}}>
        <Link href='/'>
          <Logo />
        </Link>
      </Toolbar>
    </AppBar>
)

export default MainNavbar
