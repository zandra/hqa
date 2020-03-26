import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Box, Container  } from '@material-ui/core'
import { Header, Footer } from './layouts'

export default function Layout() {

  return (
    <Fragment>
     <Header />
     <Footer />
    </Fragment>
  );
}