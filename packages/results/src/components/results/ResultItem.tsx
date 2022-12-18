import * as React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import FlightLandIcon from '@material-ui/icons/FlightLand'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

type searchFlightProps = {
  index: number
  data: any
}
const ResultItem: React.FC<searchFlightProps> = (props: searchFlightProps) => {
  const classes = useStyles()
  const { index, data } = props

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          IDA - {data.carrier}
        </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography className={classes.pos} color="textSecondary">
          <FlightTakeoffIcon /> - {data.departureDate.hourOfDay}:
          {data.departureDate.minute}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <FlightLandIcon /> - {data.arrivalDate.hourOfDay}:
          {data.arrivalDate.minute}
        </Typography>
        <Typography variant="h3" color="primary">
          {data.price} €
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small">
          Select
        </Button>
      </CardActions>
    </Card>
  )
}

export default ResultItem
