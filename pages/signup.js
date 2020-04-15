import Head from 'next/head'
import { useEffect, useState } from 'react'
import { makeStyles, Container, Paper, Typography, Button } from '@material-ui/core'
import { Link } from '../components/wrapped'
import { useUser } from '../utils/helpers'
import Router from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '500px',
    marginTop: '200px'
  },
  paper: {
    margin: '20px',
    padding: '20px'
  },
  heading: {
    padding: '20px'
  },
  form: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center'
  },
  text: {
    padding: '20px'
  },
  input: {
    width: '350px',
    height: '35px',
    margin: '5px',
    border: '1px solid grey',
    paddingLeft: '1px'
  }
}))

export default function Signup () {
  const classes = useStyles()

  const [user, { mutate }] = useUser()
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    // redirect to home when user is created or if authenticated
    if (user) Router.replace('/')
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TOdo update this to be more reactlike (useState)
    const body = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      password: e.currentTarget.password.value
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if (res.status === 201) {
      const userObj = await res.json()
      mutate(userObj)
    } else {
      setErrorMsg(await res.text())
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Container className={classes.root} fixed >
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.heading} gutterBottom >Sign Up</Typography>
          <form className={classes.form} onSubmit={handleSubmit} >
            <label htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className={classes.input}
              />
            </label>
            <label htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                className={classes.input}
              />
            </label>
            <label htmlFor="password">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                className={classes.input}
              />
            </label>
            <Button type="submit">Sign up</Button>
          </form>
          <Typography variant="body1" className={classes.text}>Already have an account? <Link href="/login">Login</Link></Typography>
        </Paper>
      </Container>
    </>
  )
}
