// import { Fragment } from 'react'
// import { ListItemLink } from '../components/wrapped'
// import { Collapse, List, ListItem, ListItemText, Typography, makeStyles } from '@material-ui/core'
// import ExpandLess from '@material-ui/icons/ExpandLess'
// import ExpandMore from '@material-ui/icons/ExpandMore'

// const useStyles = makeStyles({
//   nested: {}
// })

// // TODO change ListItemText to get title from reports

// export default function ReportsNav (props) {
//   const classes = useStyles()
//   const [open, setOpen] = React.useState(true)

//   const handleClick = () => {
//     setOpen(!open)
//   }

//   return (
//     <List key="reports">
//       <ListItem button onClick={handleClick}>
//         <ListItemText primary="Shipping Reports" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List key="shipping" component="div" >
//           <ListItemLink href={{ pathname: '/wiki/reports/shipping', query: { key: 'sh1' } }} primary="Complete Shipping Report"/>
//           <ListItemLink href="/wiki/reports/shipping" primary="Shipping Destinations"/>
//           <ListItemLink href="/wiki/reports/shipping" primary="Shipping Services"/>
//         </List>
//       </Collapse>

//     </List>
//   )
// }
