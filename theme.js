import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#455a64',
      light: '#718792',
      dark: '#1c313a'
    },
    secondary: {
      main: '#ff6d00',
      light: '#ff9e40',
      dark: '#c43c00'
    },
    error: {
      main: '#ef5350'
    },
    background: {
      default: '#f5f5f5'
    }
  }
})

export default theme
