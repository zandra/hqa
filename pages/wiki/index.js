// Wiki > index.js
import Link from '../../components/styled/StyledLink'
import Layout from '../../components/Layout'
import { Grid, Typography, List, ListItem, ListItemText, makeStyles } from '@material-ui/core'
import { wikiNav } from '../store'

const useStyles = makeStyles({
  container: {
    backgroundColor: '#e3f2fd'
  },
  topicsList: {
    backgroundColor: 'green'
  }
})

const topNav = wikiNav.filter(item => item.type === 'wiki')

// Add page Hero or banner

const Page = (props) => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.container}
      >
        {/* First grid-item { left }:  Wiki Nav   */}
        <Grid item m={3} id="wikiNav">
          <List className={classes.topicsList}>
            <Typography variant='subtitle1'>Modules</Typography>
            {topNav.map(item =>
              <ListItem button={true} key={item.key}>
                <ListItemText
                  primary={item.title}
                />
              </ListItem>
            )}
          </List>
        </Grid>
        {/* Second grid-item { middle }:  Selected Topic blurb   */}
        <Grid item m={3} s={6}>
          <Typography variant='h4'>Hello</Typography>
        </Grid>
        {/* Third grid-item { right }:  Selected Topic Anatomy   */}
        <Grid item m={3} s={6}>
          <Typography variant='h4'>Hello</Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Page
