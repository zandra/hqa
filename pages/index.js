import { Container, Typography, Box }from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import Link from 'next/link'


// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#455a64',
      light:'#718792',
      dark:'#1c313a'
    },
    secondary: {
      main: '#ff6d00',
      light:'#ff9e40',
      dark: '#c43c00'
    },
    error: {
      main: '#ef5350',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export default function Index() {
  // react Hooks for user state 

  // login page = ?
  // build out User
  // * stlye page, for userState = logged
  // * index.getInitialProps for when userState is logged in
  // * ?? where are you going to store your users
  // * ?? what authentication will you use 
  // * ??
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h2>Welcome to HQA</h2>
        <Link href="https://medium.com/javascript-in-plain-english/ssr-with-next-js-styled-components-and-material-ui-b1e88ac11dfa">
        <a>Click</a>
        </Link>
      </Layout>
    </ThemeProvider>
  );
}