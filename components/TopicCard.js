import { makeStyles, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core'
import { Link } from './wrapped'

const useStyles = makeStyles({
  root: {
    minWidth: 400
  },
  title: {
    fontSize: 14
  },
  link: {
    align: 'right'
  }
})

export default function TopicCard (props) {
  const classes = useStyles()
  console.log(props.name)
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="red" gutterBottom>
          {props.name}
        </Typography>
        <CardActions>
          <Typography align='right' className={classes.link}>
            <Link href='#'>Go</Link>
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  )
}
