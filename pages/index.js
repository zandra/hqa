import Layout from '../components/Layout'
import { Grid, Paper, Typography } from '@material-ui/core'
import Link from 'next/link'

// root > index.js
const Index = (props) => {
  // react Hooks for user state 

  // login page = ?
  // build out User
  // * stlye page, for userState = logged
  // * index.getInitialProps for when userState is logged in
  // * ?? where are you going to store your users
  // * ?? what authentication will you use 
  // * ??
  return (
    <Layout>
      <Typography variant="h3" align='center' gutterBottom>
          Welcome to HQA
      </Typography>
      <Grid container justify='space-around' spacing={3}>
        <Grid item>
          <Typography>
            <Link href="/wiki">
              <a>Wiki</a>
            </Link>
            <Link href="/sb/test">
            <a>Test</a>
          </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            Second Grid
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
export default Index;