import { Fragment } from 'react'
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
