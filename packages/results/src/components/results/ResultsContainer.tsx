import React, { useEffect, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useLocalStorage from '../../hooks/useLocalStorage'
import ResultsHeader from './ResultsHeader'

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '3%',
  },
  title: {
    fontWeight: 700,
  },
}))

export default function ResultsContainer() {
  const classes = useStyles()
  const [storedSearch, setStoredSearch] = useLocalStorage('searchParams', '')

  /*useEffect(() => {
    if (
      storedSearch &&
      storedSearch.departure &&
      storedSearch.arrival &&
      storedSearch.date
    ) {
    }
  }, [])*/

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>
          <Typography variant="h3" color="primary">
            Resultados
          </Typography>
        </div>
        {storedSearch && <ResultsHeader {...storedSearch} />}
      </div>
    </div>
  )
}
