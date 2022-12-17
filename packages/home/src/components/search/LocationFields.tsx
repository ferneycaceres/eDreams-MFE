import * as React from 'react'
import AutoComplete, {
  IAutoComplete,
  IAutoCompleteOption,
} from '../common/AutoComplete'
import { buildAutoCompleteObject } from '../utils/Utils'

interface LocationFieldsProps {
  locations: string[]
  onChangeLocation?(value: IAutoCompleteOption): any
  error?: boolean
  errorMessage?: string
}

const DepartureLocations: React.FC<LocationFieldsProps> = (
  props: LocationFieldsProps
) => {
  const { locations, onChangeLocation, error, errorMessage } = props
  const parseAutocomplete = buildAutoCompleteObject(locations)

  const autoCompleteProps: IAutoComplete = {
    id: 'departure-autocomplete-field',
    label: 'Departure Locations',
    options: parseAutocomplete,
    styles: {
      width: '250px',
    },
    onChange: (value: IAutoCompleteOption) => {
      onChangeLocation(value)
    },
    error: error,
    errorMessage: errorMessage,
  }
  return <div>{<AutoComplete {...autoCompleteProps} />}</div>
}

const ArrivalLocations: React.FC<LocationFieldsProps> = (
  props: LocationFieldsProps
) => {
  const { locations, onChangeLocation, error, errorMessage } = props
  const parseAutocomplete = buildAutoCompleteObject(locations)
  const autoCompleteProps: IAutoComplete = {
    id: 'arrival-autocomplete-field',
    label: 'Arrival Locations',
    options: parseAutocomplete,
    styles: {
      width: '250px',
    },
    onChange: (value: IAutoCompleteOption) => {
      onChangeLocation(value)
    },
    error: error,
    errorMessage: errorMessage,
  }
  return <div>{<AutoComplete {...autoCompleteProps} />}</div>
}

export { DepartureLocations, ArrivalLocations }
