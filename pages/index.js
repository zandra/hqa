// Root > index.js
import Layout from '../components/Layout'
import TopicLinks from '../components/TopicLinks'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import Link from '../components/styled/StyledLink'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    border: '1px solid black'
  },
  grid: {
    border: '1px solid black'
  },
  link: {
    color: theme.palette.primary.contrastText
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
      <div className={classes.root}>
        <Grid container justify='space-between' spacing={1} className={classes.container}>
          {/* First grid: 2/3 page */}
          <Grid key="main" item xs s={9} className={classes.grid}>
            <Typography variant="h4" align='center' gutterBottom>Welcome to HQA</Typography>

            <Typography className={classes.link}>
              <TopicLinks />
              <Link href="/wiki" >
                <a>Wiki</a>
              </Link>
              <Link href="/sb/test">
                <a>Test</a>
              </Link>
            </Typography>
          </Grid>
          {/* User extensions */}
          <Grid key="side" item xs s={4} className={classes.grid}>
            <Typography>
            User Extensions
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}
export default Index
