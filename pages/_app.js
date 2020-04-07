import { useEffect, useState } from 'react'
import { ThemeProvider, useMediaQuery, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'

export default function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) { jssStyles.parentNode.removeChild(jssStyles) }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
