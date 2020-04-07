import { Fragment } from 'react'
import { Header, Footer } from './layouts'

export default function Layout ({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}
