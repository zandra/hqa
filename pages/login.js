import { makeStyles, Container, Paper, Typography, Button as MuiButton } from '@material-ui/core'
import { Link } from '../components/wrapped'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../utils/helpers'

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
  error: {
    color: theme.palette.primary.error
  },
  input: {
    width: '350px',
    height: '35px',
    margin: '5px'
  },
  panda: {
    align: 'center'
  }
}))

export default function Login () {
  const classes = useStyles()
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()
  const [user, { mutate }] = useUser()

  const { name, email } = user || {}

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push('/')
  }, [user])

  async function onSubmit (e) {
    e.preventDefault()
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }
    const res = await fetch('/api/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if (res.status === 200) {
      const userObj = await res.json()
      mutate(userObj)
    } else {
      setErrorMsg('Wrong Username or Password')
    }
  }

  return (
    <>
      <Container className={classes.root} fixed >
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.heading} gutterBottom >Login</Typography>
          <form className={classes.form} onSubmit={onSubmit}>
            {errorMsg ? <p className={classes.error}>{errorMsg}</p> : null}
            <label htmlFor="email">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                className={classes.input}
              />
            </label>
            <label htmlFor="password">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className={classes.input}
              />
            </label>
            <MuiButton type="submit">Sign in</MuiButton>
          </form>
          <Typography variant="body1" className={classes.text} align='right'>
            <Link href="/signup">Create an account</Link>
          </Typography>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="body2">Current User</Typography>
          { !user ? <Typography align='center' className={classes.panda}>🐼🐼🐼</Typography>
            : <ul>
              <li>{name}</li>
              <li>{email}</li>
            </ul>
          }
        </Paper>
      </Container>
    </>
  )
}
