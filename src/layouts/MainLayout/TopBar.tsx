import clsx from 'clsx'
import {AppBar, makeStyles, Toolbar} from '@material-ui/core'
import Link from 'next/link'
import Logo from '../Logo'

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64,
  },
}))

interface Props {
  className?: string
}

const TopBar = ({className}: Props) => {
  const classes = useStyles()

  return (
      <AppBar
          className={clsx(classes.root, className)}
          elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <Link href='/'>
            <Logo />
          </Link>
        </Toolbar>
      </AppBar>
  )
}

export default TopBar
