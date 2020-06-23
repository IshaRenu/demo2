import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { ListSubheader, ListItemAvatar } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const getStyles = makeStyles(theme => ({
  
  textContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 8,
      marginLeft: 0
    },
    root: {
      color: 'blue'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
      
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
}))

const ListItems = props => {
  const classes = getStyles()
  const { content, permission, image, heading } = props
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
          <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src='../../images/bug.png'/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {heading}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {content}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    
          
        
     
  )
}

ListItems.propTypes = {
  text: PropTypes.string.isRequired
}

export default ListItems