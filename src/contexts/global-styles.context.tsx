import {createStyles, makeStyles} from '@material-ui/core'
import {FC} from 'react'

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
    },
    body: {
      backgroundColor: '#f4f6f8',
      height: '100%',
      width: '100%',
    },
    a: {
      textDecoration: 'none',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
    '#__next': {
      height: '100%',
      width: '100%',
    },
    '.container': {
      minHeight: 'calc(100vh - 64px)',
      padding: '0 0.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}))

const GlobalStyles: FC = () => {
  useStyles()

  return null
}

export default GlobalStyles
