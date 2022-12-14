import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'

import Logo from './images/logo.svg'

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: '64px',
    paddingRight: '12px',
  },
  logo: {
    height: '24px',
    width: '107px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerLinks: {
    marginLeft: '12px',
    marginRight: '12px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textTransform: 'none',
    backgroundColor: '#FFFFFF',
    color: '#005dad',
  },
  button: {
    display: 'flex',
  },
  leftSide: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  rightSide: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftSide}>
            <div className={classes.logo}>
              <a href="/">
                <Logo />
              </a>
            </div>
            <div className={classes.headerLinks}>
              <Typography variant="h6" noWrap component={RouterLink} to="/">
                Vuelos
              </Typography>
            </div>
          </div>
          <div className={classes.rightSide}>
            <div className={classes.button}>
              <Button
                variant="contained"
                className={classes.link}
                component={RouterLink}
                to="/"
              >
                Gestionar reserva
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
