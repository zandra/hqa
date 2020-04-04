// Root > index.js
import Layout from '../components/Layout'
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core'
import { Link } from '../components/wrapped'
import Extension from '../components/extensions/HackerNews'
import { ipsum } from '../store'

const useStyles = makeStyles(theme => ({
  root: {
  },
  grid: {
    border: '1px solid black'
  },
  paper: {
    color: theme.palette.primary.background,
    margin: 10,
    padding: 10
  }
}))

const Index = (props) => {
  const classes = useStyles()
  // react Hooks for user state

  // login page = ?
  // build out User
  // * stlye page, for userState = logged
  // * index.getInitialProps for when userState is logged in
  // * ?? where are you going to store your users
  // * ?? what authentication will you use
  // * ??
  return (
    <Layout>
      <Grid container justify='space-between' spacing={2} className={classes.root}>
        {/* First grid: 2/3 page */}
        <Grid item key="main" xs={8} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align='center' gutterBottom>Welcome to HQA</Typography>
            <Typography paragraph>{ipsum.long}</Typography>
          </Paper>
        </Grid>
        {/* User extensions */}
        <Grid item key="extensions" s={3} xs={4} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography>User Extensions</Typography>
            <Extension />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Index
