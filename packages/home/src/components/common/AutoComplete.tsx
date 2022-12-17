import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export interface IAutoComplete {
  id: string
  label: string
  options: IAutoCompleteOption[]
  onChange?(value: any): any
  styles?: any
  error?: boolean
  errorMessage?: string
}

export interface IAutoCompleteOption {
  option: string
  value: string
}

const AutoComplete: React.FC<IAutoComplete> = (props: IAutoComplete) => {
  const { id, label, options, styles, onChange, error, errorMessage } = props
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    onChange(value)
  }

  return (
    <Autocomplete
      id={id}
      options={options}
      getOptionLabel={(option) => option.option}
      style={styles}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          error={!!error}
          helperText={errorMessage}
        />
      )}
      onChange={handleChange}
      getOptionSelected={(option, value) => option.value === value.value}
    />
  )
}

export default AutoComplete
