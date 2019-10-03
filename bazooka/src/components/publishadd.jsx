import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles, } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './css/styles1.css';
import history from '../pages/history';
import LoginButton from './login-button';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';


const styles = theme => ({
    Addbtn: {
        color: '#fff',
        '&:hover': {
            color: '#2fdab8',
          },
    },
})


class PublishAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            vertical: 'top',
            horizontal: 'center',
        }
    }


    handleClick = state => () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    checkUserPosition = () => {
            history.push('/publish-Add');
    }
   

    render() {
        const { classes } = this.props;
        const { vertical, horizontal, open } = this.state;

        if(this.props.sendingUserInfoToComponent.user_is_logged_in === true) {
            return(
                <div>
                <Button className={classNames(classes.Addbtn)} onClick={this.checkUserPosition}>
                <span className='subheadBtns'>Publish Add</span>
                </Button>
                </div>
            )
        }
        else{
            return(
                <div>
                     <Tooltip disableFocusListener title="You are not Logged in Please log in..">
                     <Button className={classNames(classes.Addbtn)} onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })}>
                     <span className='subheadBtns'>Publish Add</span>
                     </Button></Tooltip>
                     <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Please Log in to Publish an AD</span>}
        />
                     
                     
                </div>
            )
        }
        
    }
}
PublishAdd.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(PublishAdd);

