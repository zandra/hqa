import { Link } from '../wrapped'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, AppBar, Toolbar, Menu, MenuItem, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: theme.palette.primary.contrastText
  },
  profile: {
  }
})
)

export default function Header () {
  const classes = useStyles()
  const [logged, setLogged] = React.useState(true)

  // Right side profile nav
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={2} className={classes.nav}>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              <Link href="/" className={classes.link}>HQA</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              <Link href="/wiki" className={classes.link}>Wiki</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              <Link href="/wiki/reports" className={classes.link}>Reports</Link>
            </Typography>
          </Grid>
        </Grid>
        {logged && (
          <div className={classes.profile}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
