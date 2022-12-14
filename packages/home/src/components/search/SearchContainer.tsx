import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import Banner from '../../assets/banner.png'
import SearchTabs from './SearchTabs'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: '10%',
    paddingRight: '10%',
    height: '500px',
    backgroundImage: `url(${Banner})`,
    margin: '0px',
  },
  searchTitle: {
    paddingTop: '40px',
    paddingBottom: '40px',
  },
  searchContainer: {},
}))

export default () => {
  const classes = useStyles()

  return (
    <Box component="div" m={1} className={classes.container}>
      <div className={classes.searchTitle}>
        <Typography variant="h3" noWrap color="secondary">
          Busca. Reserva. Viaja.
        </Typography>
      </div>
      <div className={classes.searchContainer}>
        <SearchTabs />
      </div>
    </Box>
  )
}
