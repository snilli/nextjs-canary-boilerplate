import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1d4796',
    },
    secondary: {
      main: '#2b6eeb',
    },
    error: {
      main: red.A400,
    },
    divider: 'rgb(221, 221, 221)',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          textTransform: 'inherit',
          fontSize: '.875rem',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: '.25rem',
          fontWeight: 600,
        }
      }
    }
  }
});

export default theme;
