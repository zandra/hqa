import { Typography, Box, Button } from '@material-ui/core'
import Link from 'next/link'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link href="#"> 
        <a>My Link</a>
      </Link>{"  "} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default props => (
  <Box>
    <Copyright />
    Hello
  </Box>
)