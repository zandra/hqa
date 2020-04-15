// Wiki > index.js
import { Link, ListItemLink } from '../../components/wrapped'
import Layout from '../../components/Layout'
import { WikiNav } from '../../components/layouts'
import { Grid, makeStyles, Typography, Paper } from '@material-ui/core'
import { ipsum } from '../../store'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#eceff1'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  text: {
    marginTop: '20px'
  }
}))

const Page = (props) => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container
        direction="row"
        justify="flex-start"
        className={classes.container}
      >
        {/* First grid-item { left }:  Wiki Nav   */}
        <Grid item id="wikiNav" xs={3} className={classes.nav} >
          <WikiNav />
        </Grid>
        {/* Second grid-item { middle }:  Selected Topic blurb   */}
        <Grid item xs={8} className={classes.text}>
          <Paper className={classes.paper}>
            <div>
              <Typography variant='h4' >Shipping Easy</Typography>
              <Typography paragraph>{ipsum.long}</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Page
