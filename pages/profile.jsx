import Head from 'next/head'
import { Fragment } from 'react'
import { Container, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import { useUser } from '../utils/helpers'

export default function Profile () {
  const [user] = useUser()
  const { name, email } = user || {}

  return (
    <Fragment>
      <Head>
        <title>{name}</title>
      </Head>
      <Layout>
        <Container>
          <ul>
            <li><Typography>Name: {name}</Typography></li>
            <li><Typography>email: {email}</Typography></li>
          </ul>
        </Container>
      </Layout>
    </Fragment>
  )
}
