import { makeStyles, Typography, Card, CardContent, CardActions } from '@material-ui/core'
import { Link } from './wrapped'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 225,
    backgroundColor: theme.palette.primary.light
  },
  title: {
    fontSize: 18
  },
  link: {
    color: theme.palette.secondary.main
  }
}))

export default function TopicCard (props) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
          {props.name}
        </Typography>
        <CardActions>
          <Typography>
            <Link className={classes.link} href={props.src}>Go</Link>
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  )
}
