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
  }
}))

const Template = (props) => {
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
            <Typography variant='h4' >{props.header}</Typography>
            <Typography paragraph>{ipsum.long}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Template
