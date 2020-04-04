import { Fragment } from 'react'
import { Container, List, Divider, Typography, Paper, makeStyles } from '@material-ui/core'
import { ListItemLink } from '../wrapped'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import TableChartIcon from '@material-ui/icons/TableChart'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import BuildIcon from '@material-ui/icons/Build'

// import api/wiki
// import api/blog
const useStyle = makeStyles(theme => ({
  root: {

  },
  header: {
    textAlign: 'center',
    margin: 5,
    padding: 5
  },
  paper: {}
}))

export default function WikiNav (props) {
  const classes = useStyle()
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <List key='wiki' className={classes.wiki}>
          <Typography variant='h5' className={classes.header}>ShippingEasy Wiki</Typography>
          <ListItemLink key="reports" primary="Reporting" href="/wiki/reports" icon={<EqualizerIcon />} />
          <ListItemLink key="shipping" primary="Shipping" href="/wiki/template" as="/wiki/shipping" icon={<TableChartIcon/>} />
          <ListItemLink key="products" primary="Product Catalogue" href="/wiki/template" as="/wiki/im" icon={<TableChartIcon/>} />
          <ListItemLink key="bt" primary="Branded Tracking" href="/wiki/template" as="/wiki/bt" icon={<LocalShippingIcon/>}/>
        </List>
        <Divider />
        <List key='blog' className={classes.blog}>
          <Typography variant='h5' className={classes.header}>Articles & Resources</Typography>
          <ListItemLink primary="Carriers 101" href="/blog/carriers" icon={<LibraryBooksIcon/>} />
          <ListItemLink primary="All Things Amazon" href="/blog/amazon" icon={<LibraryBooksIcon/>} />
          <ListItemLink primary="Testing Resources" href="/blog/testing" icon={<BuildIcon/>}/>
        </List>
      </Paper>
    </Container>
  )
}
