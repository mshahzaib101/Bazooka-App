import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './imageGrid/image-grid.css';


const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: '#2fdab8;',
    'size': '500',
  },
});

var x = window.matchMedia("(max-width: 600px)");


function CircularIndeterminate(props) {
  const { classes } = props;

  if (x.matches) {
      return(
    <div className='loader-imagegrid'>
      <CircularProgress className={classes.progress} size={100} thickness={2} />
    </div>
    )
  }
  else{
  return (
    <div className='loader-imagegrid'>
      <CircularProgress className={classes.progress} size={200} thickness={2} />
    </div>
  );}
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
