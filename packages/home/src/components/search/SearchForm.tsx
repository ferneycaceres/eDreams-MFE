import React, { useEffect, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { IAutoCompleteOption } from '../common/AutoComplete'
import DepartureDate from '../common/DateField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { ArrivalLocations, DepartureLocations } from '../search/LocationFields'
import useLocalStorage from '../../hooks/useLocalStorage'

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

interface ISearchFormError {
  error: boolean
  errorMessage: string
  errorType?: any
}

export default function SearchForm() {
  const classes = useStyles()
  const defaultDate = new Date().toISOString().slice(0, 10)
  const [searchType, setSearchType] = useState('1')
  const [locations, setLocations] = useState<string[]>([])
  const [departureSelected, setDepartureSelected] =
    useState<IAutoCompleteOption>(null)
  const [arrivalSelected, setArrivalSelected] =
    useState<IAutoCompleteOption>(null)
  const [departureDate, setDepartureDate] = useState<string>(defaultDate)
  const [errors, setErrors] = useState<ISearchFormError>(null)
  const resetErrors = () => setErrors(null)
  const [storedSearch, setStoredSearch] = useLocalStorage('searchParams', '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType((event.target as HTMLInputElement).value)
  }
  const handleArrivalChange = (value: IAutoCompleteOption) => {
    resetErrors()
    setArrivalSelected(value)
  }
  const handleDepartureChange = (value: IAutoCompleteOption) => {
    resetErrors()
    setDepartureSelected(value)
  }
  const handleDepartureDate = (value: string) => {
    resetErrors()
    setDepartureDate(value)
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

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const arrivalValue = arrivalSelected ? arrivalSelected.value : null
    const departureValue = departureSelected ? departureSelected.value : null
    const departureDateValue = departureDate ? departureDate : null
    console.log(
      'validation: ',
      validateForm(departureValue, arrivalValue, departureDateValue)
    )
    if (validateForm) {
      window.location.href = '/results'
      setStoredSearch({
        departure: departureValue,
        arrival: arrivalValue,
        date: departureDateValue,
      })
    }
  }

  const validateForm = (
    departureLocation: string | null,
    arrivalLocation: string | null,
    departureDate: string | null
  ): boolean => {
    if (
      departureDate === null &&
      departureLocation === null &&
      arrivalLocation === null
    ) {
      return true
    }
    if (
      departureLocation === arrivalLocation &&
      departureLocation != null &&
      arrivalLocation != null
    ) {
      const errorMap: ISearchFormError = {
        error: true,
        errorMessage: 'El origen y el destino no pueden ser el mismo',
      }
      setErrors(errorMap)
      console.log('show error')
      return false
    }
    if (
      departureDate === null ||
      departureLocation === null ||
      arrivalLocation === null
    ) {
      const errorMap: ISearchFormError = {
        error: true,
        errorMessage: 'Debe completar todos los campos correctamente',
      }
      setErrors(errorMap)
      console.log('show error')
      return false
    }
    return true
  }

  useEffect(() => {
    retrieveIntineraries()
    setStoredSearch(null)
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                  onChangeLocation={(value: IAutoCompleteOption) => {
                    handleDepartureChange(value)
                  }}
                />
              )}
            </div>
            <div className={classes.inputField}>
              {locations && (
                <ArrivalLocations
                  locations={locations}
                  onChangeLocation={(value: IAutoCompleteOption) => {
                    handleArrivalChange(value)
                  }}
                  error={errors?.error}
                  errorMessage={errors?.errorMessage}
                />
              )}
            </div>
            <div className={classes.inputField}>
              <DepartureDate
                id="departure-date-field"
                label="Departure Date"
                defaultValue={defaultDate}
                onChange={handleDepartureDate}
              />
            </div>
            <div className={classes.inputField}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.searchFlightButton}
              >
                Buscar Vuelo
              </Button>
            </div>
          </div>
        </FormControl>
      </form>
    </div>
  )
}
