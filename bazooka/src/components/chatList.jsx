import React, { Component } from 'react';
import * as firebase from 'firebase';
import {database} from '../index';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../components/css/styles5.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import MessagesContainer from '../containers/message';




const styles = {
    
    closingbtn: {
        'float': 'right',
        'color': "#0000008a"
    },
    dialogbutton2: { 
        'color': '#2fdab8',
      },
  };




class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
    }


    render() {
        const { classes } = this.props;
        

        return(
            <div>
                <ListItem>
                    <Avatar alt={this.props.name}  src={this.props.imgUrl}  className={classNames(classes.avatar, classes.bigAvatar)} />
                    <ListItemText primary={this.props.name} secondary="seller at bazooka" />
                    <MessagesContainer adPublisherUid={this.props.userUid} />
                 </ListItem>

            </div>
            )
    }
}

ChatList.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ChatList)