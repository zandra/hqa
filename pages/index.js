// Root > index.js
import Layout from '../components/Layout'
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core'
import { Link } from '../components/wrapped'
import Extension from '../components/extensions/HackerNews'
import TopicCard from '../components/TopicCard'
import { wiki } from '../store'

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
  },
  hqa: {
    textAlign: 'center'
  },
  logo: {
    minHeight: 600,
    fontStyle: 'bold'
  }
}))

const Index = (props) => {
  const classes = useStyles()

  const tt = wiki.map(w => w.title)
  console.log(tt)
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
        <Grid item key="logo" xs={8} alignContent="center" className={classes.hqa}>
          <Paper className={classes.logo} >
            <Typography variant="h2" className={classes.name}>HQA</Typography>
          </Paper>
        </Grid>
        {/* User extensions */}
        <Grid item key="extensions" s={3} xs={4} className={classes.grid}>
          {wiki.map(t => (
            <TopicCard name={t.title} />
          ))}
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Index
