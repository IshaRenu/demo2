import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EndPointDropDown from '../menus/EndPointDropDown';

const getStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyItems: 'center',
    backgroundColor: theme.palette.background.paper,
    marginTop: 50,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
}));



const TabPanels = props => {
  const classes = getStyles()
  const { value, openVal, ancEl } = props;

  const handleMenuClick = (key, e) => {
    props.onMenuClick(key, e)
}
  
return (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Tabs value={value} aria-label="simple tabs example" variant="fullWidth" 
      indicatorColor='primary'>
        <Tab label="Movies" value={"1"} onClick={e => props.onTabClick("1", e)}/>
        <Tab label="Search Results" value={"2"} onClick={e => props.onTabClick("2", e)}/>
        <Tab label="TV Shows" value={"3"} onClick={e => props.onTabClick("3", e)}/>

        <EndPointDropDown
          onMenuClick={handleMenuClick}
          openVal={openVal}
          ancEl={ancEl}
    ></EndPointDropDown>
      </Tabs>
    </AppBar>
    
</div>
)}

export default TabPanels