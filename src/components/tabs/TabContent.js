import React from 'react'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles'

import ListItems from './ListItems'

const getStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

const items1 = [
  { content: "Option 1", permission: 1, image: "", heading: "head1" },
  { content: "Option 2", permission: 2, image: "", heading: "head2" },
  { content: "Option 3", permission: 4, image: "", heading: "head3" }
]

const TabContent = props => {
    const classes = getStyles()
    
  return (
    <List className={classes.root}>
      {props.items.map(element =>
        {
          const { content, permission, image, heading } = element
          return (
            <ListItems 
              content={content} 
              permission={permission} 
              image={image} 
              heading={heading}
              //onClick={() => onTodoClick(item.id)}
          />
          )
      })}
    </List>
  )
}

TabContent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TabContent