import { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, Typography, Card, CardHeader, CardContent, Collapse, IconButton, Divider } from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: '1px solid black'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}))

export default function ReportCard (props) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Title: {props.title}</Typography>
          <Divider />
          <Typography paragraph>ID: {props.key}</Typography>
          <Divider />
          <Typography paragraph>Category: {props.category}</Typography>
          <Divider />
          <Typography paragraph>Category: {props.selected}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
