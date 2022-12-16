/* eslint-disable no-use-before-define */
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export interface IAutoComplete {
  id: string
  label: string
  options: IAutoCompleteOption[]
  onChange?(value: any): any
  styles?: any
}

export interface IAutoCompleteOption {
  title: string
  value: string
}

const AutoComplete: React.FC<IAutoComplete> = (props: IAutoComplete) => {
  const { id, label, options, styles, onChange } = props
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    //console.log(value)
    onChange(value)
  }

  return (
    <Autocomplete
      id={id}
      options={options}
      getOptionLabel={(option) => option.title}
      style={styles}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      onChange={handleChange}
    />
  )
}

export default AutoComplete
