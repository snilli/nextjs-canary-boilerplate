import {colors, createMuiTheme} from '@material-ui/core'
import shadows from './shadows'
import typography from './typography'
import {Shadows} from '@material-ui/core/styles/shadows'

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    dark: string
  }
}

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: colors.indigo[500],
    },
    secondary: {
      main: colors.indigo[500],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows: shadows as Shadows,
  typography,
})

export default theme
