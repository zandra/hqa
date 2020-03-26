// Wiki > index.js
import Link from 'next/link'
import { Grid, Typography, Paper, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    backgroundColor: '#e3f2fd'
  },
  paper: {
    border: '1px solid grey'
  }
})

const Index = (props) => {
  const classes = useStyles();
  return (
  <Grid container space={2} direction='row' className={classes.container}>

    {/* Leftmost item
    - import WikiIndex from store 
    -   
    
    */}
      <Grid item m={3} s={6}>
        <Typography variant='h4'>Hello</Typography>
        <List >
        <ListItem>
          <ListItemText
          />
        </ListItem>,
    </List>
    </Grid>
    <Grid item m={3} s={6}>
      <Typography variant='h4'>Hello</Typography>
    </Grid>
  </Grid>
  );
}
export default Index;