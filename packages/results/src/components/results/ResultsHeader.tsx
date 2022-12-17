import React, { useEffect, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
  },
}))

interface ResultsHeaderProps {
  departure: string
  arrival: string
  date: string
}

const ResultsHeader: React.FC<ResultsHeaderProps> = (
  props: ResultsHeaderProps
) => {
  const classes = useStyles()
  const { departure, arrival, date } = props
  let showResultHeader = true
  if (departure === null && arrival === null && date == null) {
    showResultHeader = false
  }
  return (
    <div className={classes.header}>
      {showResultHeader && (
        <Typography variant="h4" color="primary">
          Vuelos desde {departure} a {arrival} - {date}
        </Typography>
      )}
      {!showResultHeader && (
        <Typography variant="h4" color="primary">
          Te sugerimos alguno de nuestros vuelos....
        </Typography>
      )}
    </div>
  )
}

export default ResultsHeader
