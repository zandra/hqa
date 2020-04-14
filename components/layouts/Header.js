import { useState, useEffect } from 'react'
import { Link, ListItemLink } from '../wrapped'
import { makeStyles, useMediaQuery } from '@material-ui/core/styles'
import { Grid, AppBar, Toolbar, Menu, IconButton, Typography, MenuItem } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Brightness2Icon from '@material-ui/icons/Brightness2' // Moon -> show on light
import Brightness7Icon from '@material-ui/icons/Brightness7' // Sun -> show on dark
import { useUser } from '../../utils/helpers'

const useStyles = makeStyles(theme => ({
  root: {
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

// useMediaQuery const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
// useState to set preferredMode
// create a Toggle > a handler for the switch event
// create an switch event

export default function Header () {
  const classes = useStyles()
  const [logged, setLogged] = useState(true)

  const [user] = useUser()
  const { name, email } = user || {}

  useEffect(() => {
    if (!user) Router.push('/login')
  }, [user])

  // Light : Dark mode
  const [mode, setMode] = useState('light')

  const handlePreferredMode = () => {
    if (mode === 'light') setMode('dark')
    if (mode === 'dark') setMode('light')
  }

  useEffect(() => {
    document.documentElement.style.setProperty('prefers-color-scheme', mode)
    // console.log(document.documentElement.style)
  })

  // Logout
  const [, { mutate }] = useUser()

  const handleLogout = async () => {
    await fetch('/api/authenticate', {
      method: 'DELETE'
    })
    mutate(null)
  }

  // Account menu drawer
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  // Handles Account menu drawer
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="sticky">
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
        <div className={classes.configs}>
          <IconButton
            color="inherit"
            onClick={handlePreferredMode}
          >
            { mode && mode === 'dark' ? <Brightness2Icon />
              : <Brightness7Icon />
            }
          </IconButton>
        </div>
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
              <ListItemLink href="/profile" primary="Profile"/>
              {/* <ListItemLink onClick={handleLogout} primary="Logout"/> */}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
