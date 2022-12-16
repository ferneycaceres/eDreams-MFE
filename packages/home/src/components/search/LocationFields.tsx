import * as React from 'react'
import AutoComplete, { IAutoComplete } from '../common/AutoComplete'
import { buildAutoCompleteObject } from '../utils/Utils'

interface LocationFieldsProps {
  locations: string[]
  onChange?(value: any): any
}

const DepartureLocations: React.FC<LocationFieldsProps> = (
  props: LocationFieldsProps
) => {
  const { locations, onChange } = props
  const parseAutocomplete = buildAutoCompleteObject(locations)
  const onchangeDep = (value: any) => {
    onChange(value)
  }
  const autoCompleteProps: IAutoComplete = {
    id: 'departure-autocomplete-field',
    label: 'Departure Locations',
    options: parseAutocomplete,
    styles: {
      width: '250px',
    },
    onChange: onchangeDep,
  }
  return <div>{<AutoComplete {...autoCompleteProps} />}</div>
}

const ArrivalLocations: React.FC<LocationFieldsProps> = (
  props: LocationFieldsProps
) => {
  const parseAutocomplete = buildAutoCompleteObject(props.locations)
  const autoCompleteProps: IAutoComplete = {
    id: 'arrival-autocomplete-field',
    label: 'Arrival Locations',
    options: parseAutocomplete,
    styles: {
      width: '250px',
    },
  }
  return <div>{<AutoComplete {...autoCompleteProps} />}</div>
}

export { DepartureLocations, ArrivalLocations }
