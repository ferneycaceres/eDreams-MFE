import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#005dad',
    },
    success: {
      main: '#4caf50',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ['"Rubik"', 'Sans Serif'].join(','),
    h3: {
      fontWeight: 700,
      fontSize: 18,
      color: '#FFFFFF',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
      color: '#FFFFFF',
      fontSize: 14,
    },
  },
})

export default theme
