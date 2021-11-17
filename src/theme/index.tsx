import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import GlobalStyles from '@mui/material/GlobalStyles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4688F4',
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
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontWeight: 600,
          fontSize: '2.375rem',
        },
        h3: {
          fontWeight: 400,
          fontSize: '2.125rem',
        },
        h5: {
          fontWeight: 400,
          lineHeight: '2.5rem',
          fontSize: '1.5rem',
        },
        subtitle1: {
          fontWeight: 500,
          fontSize: '1rem',
          lineHeight: '1.5rem',
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '.75rem',
        }
      }
    },
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

export const globalStyles = (
  <GlobalStyles
    styles={{
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      }
    }}
  />
)

export default theme;
