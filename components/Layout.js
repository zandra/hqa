import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from './layouts'

export default function Layout (props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  )
}
