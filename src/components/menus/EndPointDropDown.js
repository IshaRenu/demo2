import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles'
import { Popover } from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyItems: 'center',
    backgroundColor: theme.palette.background.paper,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
}));


const EndPointDropDown = props => {
    const classes = getStyles()
    const items = [{1:"hello", 2:"hello1"}]
    const { ancEl, openVal, menuArray } = props
    
  return (
    <div>
        <Menu  
            anchorEl={ancEl}
            open={openVal}
            
            // open={Boolean(ancEI)}
            // onClose={handleClose}
        >
          {items.map(menuItem => (  
              <MenuItem key={menuItem} selected={menuItem === 'Movie'} onClick={e => props.onMenuClick(menuItem, e)}>  
                {menuItem}  
              </MenuItem>  
            ))}  
        </Menu>
  </div>
  )}

export default EndPointDropDown