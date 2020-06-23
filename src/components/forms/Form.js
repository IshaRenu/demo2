import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'



const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const Form = props => {
  const classes = getStyles()
  const { key, id, imageUrl, label, source, uri } = props
  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
      <TextField
        label='Search'
        name='searchQuery'
        className={classes.textField}
        onChange={e => props.onInputChange(e.target.value)}
        margin='normal'
        variant='outlined'
        size='small'
      />
      
      <FormControl variant="outlined" className={classes.formControl} size='small'>
        <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={"age"}
          onChange={e => props.onChange(e.target.value)}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.button} variant='contained' type='submit' size='small' color='primary'>
        Search
      </Button>
    </form>
  )
}

export default Form
