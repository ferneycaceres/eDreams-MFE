import React, { ChangeEventHandler } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

export interface IDatePicker {
  id: string
  label: string
  defaultValue?: string
  onChange?(value: string): any
  styles?: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
)

const DateField: React.FC<IDatePicker> = (props: IDatePicker) => {
  const { id, label, defaultValue, styles, onChange } = props
  var todayDate = new Date().toISOString().slice(0, 10)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const classes = useStyles({
    textField: {
      styles,
    },
  })

  return (
    <TextField
      id={id}
      variant="outlined"
      label={label}
      defaultValue={defaultValue ? defaultValue : todayDate}
      type="date"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={handleChange}
    />
  )
}

export default DateField
