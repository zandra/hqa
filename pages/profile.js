import Head from 'next/head'
import Router from 'next/router'
import { Fragment, useEffect } from 'react'
import { Container, Typography } from '@material-ui/core'
import { Header } from '../components/layouts'
import { useUser } from '../utils/helpers'

export default function Profile () {
  const [user] = useUser()
  const { name, email } = user || { name: '🐼', email: '🐼' }

  useEffect(() => {
    if (!user) Router.push('/login')
  }, [user])

  return (
    <Fragment>
      <Head>
        <title>{name}</title>
      </Head>
      <Header />
      <Container>
        <ul>
          <li><Typography>Name: {name}</Typography></li>
          <li><Typography>email: {email}</Typography></li>
        </ul>
      </Container>
    </Fragment>
  )
}
