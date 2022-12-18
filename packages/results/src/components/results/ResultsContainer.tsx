import React, { useEffect, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useLocalStorage from '../../hooks/useLocalStorage'
import ResultsHeader from './ResultsHeader'
import Link from '@material-ui/core/Link'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ResultsList from './ResultsList'

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
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '3%',
  },
  title: {
    fontWeight: 700,
  },
  backLink: {
    fontSize: '18px',
  },
  backIcon: {
    fontSize: '12px',
  },
}))

export default function ResultsContainer() {
  const classes = useStyles()
  const [storedSearch, setStoredSearch] = useLocalStorage('searchParams', '')

  useEffect(() => {
    if (!storedSearch) {
      window.location.href = '/'
    }
  }, [])

  return (
    <div>
      <div>
        <div className={classes.container}>
          <Typography variant="h3" color="primary">
            Resultados
          </Typography>
          <div>
            <ResultsHeader {...storedSearch} />
          </div>
        </div>
      </div>
      <div>
        {storedSearch && (
          <div>
            <div>
              <ResultsList {...storedSearch} />
            </div>
          </div>
        )}
        {!storedSearch && (
          <div>
            <Typography variant="h4" color="primary">
              No hay parametros validos para la busqueda
            </Typography>
            <Link className={classes.backLink} href="/">
              <ArrowBackIcon fontSize="small" />
              Volver a la pagina principal
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
