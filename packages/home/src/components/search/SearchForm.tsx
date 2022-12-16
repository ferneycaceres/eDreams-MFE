import React, { useEffect, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Radio, { RadioProps } from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import AutoComplete from '../common/AutoComplete'
import DepartureDate from '../common/DateField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

import { ArrivalLocations, DepartureLocations } from '../search/LocationFields'

const useStyles = makeStyles((theme: Theme) => ({
  searchType: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchTypeLabel: {
    color: '#666666',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 400,
  },
  inputFieldsContainer: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  inputField: {
    margin: '10px',
  },
  searchFlightButton: {
    borderRadius: '22px',
    height: '44px',
    paddingLeft: '22px',
    paddingRight: '22px',
  },
}))

export default function SearchForm() {
  const classes = useStyles()
  const [searchType, setSearchType] = useState('1')

  const [locations, setLocations] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType((event.target as HTMLInputElement).value)
  }

  const retrieveIntineraries = async () => {
    await axios
      .get('http://localhost:3000/locations')
      .then((res) => {
        const locations = res.data
        setLocations(locations)
      })
      .catch((err) => {
        console.log('err')
      })
  }

  useEffect(() => {
    retrieveIntineraries()
  }, [])

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="searchType"
          name="search type"
          value={searchType}
          onChange={handleChange}
          color="primary"
          className={classes.searchType}
        >
          <FormControlLabel
            value="1"
            control={<Radio color="default" />}
            label="Solo ida"
            className={classes.searchTypeLabel}
            color="primary"
          />
          <FormControlLabel
            value="2"
            control={<Radio color="default" />}
            label="Ida y vuelta"
            color="primary"
            className={classes.searchTypeLabel}
            disabled
          />
          <FormControlLabel
            value="3"
            control={<Radio color="default" />}
            label="Multiples destinos"
            color="primary"
            className={classes.searchTypeLabel}
            disabled
          />
        </RadioGroup>
        <div className={classes.inputFieldsContainer}>
          <div className={classes.inputField}>
            {locations && (
              <DepartureLocations
                locations={locations}
                onChange={(value: any) => {
                  console.log(value)
                }}
              />
            )}
          </div>
          <div className={classes.inputField}>
            {locations && <ArrivalLocations locations={locations} />}
          </div>
          <div className={classes.inputField}>
            <DepartureDate />
          </div>
          <div className={classes.inputField}>
            <Button
              variant="contained"
              color="primary"
              className={classes.searchFlightButton}
            >
              Buscar Vuelo
            </Button>
          </div>
        </div>
      </FormControl>
    </div>
  )
}
