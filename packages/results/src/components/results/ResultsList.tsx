import React, { useEffect, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import useFetch from '../../hooks/useFetch'
import { Intineraries } from './Intineraries'
import {
  searchFlightService,
  sortByPriceASC,
} from '../../services/searchFlight'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import InfiniteScroll from 'react-infinite-scroll-component'
import ResultItem from './ResultItem'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

interface ResultListProps {
  arrival: string
  departure: string
  date: string
}

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  backLink: {
    fontSize: '18px',
  },
  notFoundError: {
    marginLeft: '8%',
    marginRight: '8%',
  },
}))

const ResultsList: React.FC<ResultListProps> = (props: ResultListProps) => {
  const classes = useStyles()
  const url = 'http://localhost:3000/itineraries'
  const { data, loading } = useFetch({ url })
  const [items, setItems] = useState([])
  const maxRecordsReturned = 4
  const maxRecordsShowed = 12
  const skeletonItems = [0, 1, 2, 3]
  const [length, setLength] = useState(11)
  const { arrival, departure, date } = props

  useEffect(() => {
    if (!loading) {
      if (arrival === null && departure === null && date === null) {
        setItems(data.slice(0, maxRecordsShowed))
        setLength(maxRecordsShowed)
      } else {
        const filteredResults = searchFlightService({
          data,
          arrival,
          departure,
          departureDate: date,
        })
        const sortedResults = sortByPriceASC(filteredResults)
        setItems(sortedResults.slice(0, sortedResults.length))
        setLength(sortedResults.length)
      }
    }
  }, [loading])

  const fetchMoreData = () => {
    setTimeout(() => {
      console.log('fetmore data sow items', items)
      setItems(data.slice(0, length + maxRecordsReturned))
      setLength(length + maxRecordsReturned)
    }, 1000)
  }

  const renderLoading = () => {
    if (items.length > maxRecordsShowed) {
      return (
        <>
          {skeletonItems.map((item, i) => (
            <div key={`div-${i}`}>
              <Skeleton variant="text" key={`skeleton1-${i}`} />
              <Skeleton variant="text" key={`skeleton2-${i}`} />
              <Skeleton variant="text" key={`skeleton3-${i}`} />
            </div>
          ))}
        </>
      )
    }
  }

  return (
    <>
      {items.length > 0 ? (
        <Box sx={{ mt: 5 }} className={classes.box}>
          <Container maxWidth="xl">
            <InfiniteScroll
              dataLength={items.length - 1}
              style={{ overflow: 'inherit' }}
              next={fetchMoreData}
              hasMore={items.length < 500 ? true : false}
              loader={renderLoading()}
            >
              <Grid container spacing={2}>
                {items.map((elem: Intineraries, index: number) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    key={`grid-${index}`}
                  >
                    <ResultItem index={index} data={elem} />
                  </Grid>
                ))}
              </Grid>
            </InfiniteScroll>
          </Container>
        </Box>
      ) : (
        <div className={classes.notFoundError}>
          <Typography variant="h3" color="primary">
            No hay resultados para esta busqueda..
          </Typography>
          <Link className={classes.backLink} href="/">
            <Typography variant="h6" color="primary">
              Volver a la pagina principal
            </Typography>
          </Link>
        </div>
      )}
    </>
  )
}

export default ResultsList
