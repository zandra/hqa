import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { blueGrey, red, pink } from '@material-ui/core/colors'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[700],
      light: blueGrey[100]
    },
    secondary: {
      main: pink.A700
    },
    error: {
      main: red[600]
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
