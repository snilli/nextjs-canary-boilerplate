import clsx from 'clsx'
import {AppBar, makeStyles, Toolbar} from '@material-ui/core'
import Logo from '../../components/Logo'

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64,
  },
}))

const TopBar = () => {
  const classes = useStyles()

  return (
      <AppBar
          className={clsx(classes.root)}
          elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <Logo />
        </Toolbar>
      </AppBar>
  )
}

export default TopBar
