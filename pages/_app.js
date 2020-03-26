import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

export default class MyApp extends App {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
