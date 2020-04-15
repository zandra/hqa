import Head from 'next/head'
import { Fragment, useEffect } from 'react'
import { Container, Typography, Paper, Button, makeStyles } from '@material-ui/core'
import { Header } from '../components/layouts'
import { useUser } from '../utils/helpers'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '500px',
    marginTop: '100px'
  },
  paper: {
    margin: '20px',
    padding: '20px'
  },
  header: {
    marginBottom: '20px'
  }
}))

export default function Profile () {
  const classes = useStyles()
  const router = useRouter()
  const [user, { mutate }] = useUser()

  useEffect(() => {
    // redirect to home if user is authenticated
    if (!user) router.push('/login')
  }, [user])

  // Handle Logout (Profile drawer)
  const handleLogout = async () => {
    await fetch('/api/authenticate', {
      method: 'DELETE'
    })
    mutate(null)
  }
  return (
    <Fragment>
      <Header />
      <Container className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.header}>Current User</Typography>
          { !user ? <Typography align='center'>🐼🐼🐼</Typography>
            : <>
              <Typography>Name: {user.name}</Typography>
              <Typography>Email: {user.email}</Typography>
              <Button color="primary" onClick={handleLogout}>Logout</Button>
            </>
          }
        </Paper>
      </Container>
    </Fragment>
  )
}
