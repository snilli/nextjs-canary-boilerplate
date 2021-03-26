import {colors, createMuiTheme} from '@material-ui/core'
import shadows from './shadows'
import typography from './typography'
import {Shadows} from '@material-ui/core/styles/shadows'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white,
    },
    primary: {
      contrastText: '#ffffff',
      main: '#5664d2',
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
    },
  },
  shadows: shadows as Shadows,
  typography,
})

export default theme
