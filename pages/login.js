import AuthService from '../aaa/authService'
import { makeStyles, Container, Paper, Typography, TextField } from '@material-ui/core'
import { Link } from '../components/wrapped'
import { useState } from 'react'

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
  }
}))

export default function Login () {
  const classes = useStyles()

  // need to see if user is already logged and update state if so
  const [logged, setLogged] = useState()

  //  AuthService login function
  function handleSubmit (event) {
    event.preventDefault()
  }

  return (
    <Container className={classes.root} fixed >
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.heading} gutterBottom >Login</Typography>
        <form className={classes.form} onSubmit={handleSubmit} fullWidth>
          <TextField id="email" label="Email" variant="outlined" />
          <TextField id="password" label="Password" variant="outlined" />
        </form>
        <Typography variant="body1" className={classes.text} align='right' ><Link href="/signup">Create an account</Link></Typography>
      </Paper>
    </Container>
  )
}
