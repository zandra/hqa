import { useRouter } from 'next/router'
import { reports, ipsum } from '../../store'
import { Grid, Typography, Paper, makeStyles, Collapse, List, ListItem, ListItemText } from '@material-ui/core'
import Layout from '../Layout'
import WikiNav from './WikiNav'
import { ListItemLink } from '../../components/wrapped'
import theme from '../../theme'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  container: {
    spacing: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}))

// eslint-disable-next-line react/display-name
export default function ReportsLayout (props) {
  const classes = useStyles()
  const { query } = useRouter()
  const [open, setOpen] = React.useState(true)

  // TODO handleClick > fix ListItem onClick so they don't all open
  // TODO handleClick >  add shallow URL to Report category

  const handleClick = (event) => {
    event.preventDefault()
    setOpen(!open)
  }

  return (
    <Layout>
      <Grid container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        className={classes.container}
      >
        {/* First grid-item { left }: Wiki Nav */}
        <Grid item xs={3} id="wikiNav">
          <Paper className={classes.paper}>
            <WikiNav />
          </Paper>
        </Grid>
        {/* Second grid-item { middle }: Reports Nav */}
        <Grid item xs={3}>
          <List key="reports">
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Shipping Reports" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List key="shipping" component="div" >
                <ListItemLink href={{ pathname: '/wiki/reports/shipping', query: { key: 'sh1' } }} primary="Complete Shipping Report"/>
                <ListItemLink href={{ pathname: '/wiki/reports/shipping', query: { key: 'sh2' } }} primary="Shipping Destinations"/>
                <ListItemLink href={{ pathname: '/wiki/reports/shipping', query: { key: 'sh3' } }} primary="Shipping Services"/>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Inventory Reports" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List key="inventory" component="div" >
                <ListItemLink href={{ pathname: '/wiki/reports/inventory', query: { key: 'im2' } }} primary="Inventory Low Stock"/>
              </List>
            </Collapse>
          </List>
        </Grid>
        {/* Third grid-item { right }: Selected Topic Anatomy */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {props.children}
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}
