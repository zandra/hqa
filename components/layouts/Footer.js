import Link from 'next/link'
import { Typography, Paper, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme'

const useStyles = makeStyles({
  typography: {
    variant: 'body2',
    align: 'center'
  }
})

const Copyright = props => 
    <Typography variant="body2" align="center">
      {`Copyright ©  `}
      {new Date().getFullYear()}
      {'.'}
    </Typography>

export default props => {
  const classes = useStyles();
  return (
  <Box 
    bgcolor={theme.palette.primary.main} 
    color={theme.palette.primary.contrastText}
    p={3}
    >
    <Grid container spacing={3}> 
      <Grid item>
          <Typography className={classes.typography}>Alex Stevens</Typography>
      </Grid>
      <Grid item>
        <Copyright />
      </Grid>
    </Grid>
  </Box>
);}