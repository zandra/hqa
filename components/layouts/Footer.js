import { Typography, Box, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import theme from '../../theme'

const useStyles = makeStyles({
  box: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  typography: {
    variant: 'subtitle1',
    align: 'center'
  },
  icon: {
    color: theme.palette.primary.contrastText
  }
})

const Copyright = props =>
  <Typography variant="body2" align="center">
    {'Copyright ©  '}
    {new Date().getFullYear()}
  </Typography>

// eslint-disable-next-line react/display-name
export default props => {
  const classes = useStyles()
  return (
    <Box
      className={classes.box}
      p={3}
    >
      <Grid container spacing={3} justify='space-between' alignItems='center'>
        <Grid item>
          <Typography className={classes.typography}>ShippingEasy QA</Typography>
        </Grid>
        <Grid item>
          <Copyright />
        </Grid>
        <Grid item>
          <IconButton href="https://github.com/zandra/hqa" target="_blank" className={classes.icon}>
            <GitHubIcon />
            <Typography variant="srOnly">Github Link</Typography>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
}
