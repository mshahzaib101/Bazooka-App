import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    MuiThemeProvider,
    createMuiTheme
  } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import actionMain from '../store/actions/action-main';
import '../components/css/styles5.css';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import * as firebase from 'firebase';
import {database, messaging} from '../index';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';
import ReactDOM from 'react-dom';




// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        loggedInUserInfo: state.Loged_in_user_info
        // decCounter : state.decrementCounter.decrementState
    };
}

function mapDispatchToProps(dispatch) {
     return {
        updatingAddsDatInStore : function (dataArray){
         
            dispatch(actionMain.Adds_Data_meh(dataArray))
        }

    //     getting_user_data : function (value){
    //         return dispatch(actionMain.logged_in_user_info_meh(value));
    //       },
        
        
    };
    
}


const styles = {
    icon: {
        
        'color': '#2fdab8',
      },
        
          
    iconbutton: {
        '&:hover': {
            'color': '#2fdab8',
            'background-color': '#f3bbbe',
          },
    },
   
    closingbtn: {
        'float': 'right',
        'color': "#0000008a"
    },
    bigAvatar: {
        width: 60,
        height: 60,
      },
      icon2: {
         'color': "#FFFFFF",
      },
      textFieldmessage: {
        width: '100%',
      },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

  const theme3 = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "	#FFFFFF",
        dark: "	#0000008a",
        contrastText: "#fff"
      }
    }
  });


class MessagesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            vertical: 'top',
            horizontal: 'center',
            dialogOpen: false,
            adPublisherData: {},
            message: '',
            currentUserData: {},
            allmessages: [],
        }
    }
    handleClick = state => () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      dialoghandleClickOpen = () => {
        this.setState({ dialogOpen: true });
       
        this.bringDataOfAdPublisher();
        this.showingPreviousMessages();
     
      };
    
      dialoghandleClose = () => {
        this.setState({ dialogOpen: false });
      };
      bringDataOfAdPublisher = () => {
          //bringing ad publisher info from firebase
          let that = this;
          let rootRef = database.ref('users/' + this.props.adPublisherUid);
          rootRef.once("value")
          .then(function(snapshot) {
           let data = snapshot.val();
           that.setState({adPublisherData: data,})
           

        //    console.log(data);
        //    console.log('data from firebase');
          }
        )
         console.log(this.props.loggedInUserInfo)
         this.setState({currentUserData: this.props.loggedInUserInfo.Loged_in_user})
      }
      messagehandler = (ev) => {
          this.setState({message: ev.target.value});
      }
      messageSendFunc = () => {
          console.log(this.state.message);
          //sending message to firebase
            firebase.database().ref('messages/' + this.props.adPublisherUid + '/' + this.props.loggedInUserInfo.Loged_in_user.userUID)
            .push({
              message: this.state.message,
              sender: this.props.loggedInUserInfo.Loged_in_user.userUID,
              reciever : this.props.adPublisherUid,
            
            });
            firebase.database().ref('messages/' +this.props.loggedInUserInfo.Loged_in_user.userUID+ '/' +  this.props.adPublisherUid )
            .push({
              message: this.state.message,
              sender: this.props.loggedInUserInfo.Loged_in_user.userUID,
              reciever : this.props.adPublisherUid,
            
            });
            console.log('send');
          
            console.log(this.props.loggedInUserInfo.Loged_in_user)
            console.log('hahahaha')
            this.CloudFunction();


      }

      CloudFunction = () => {
          var key = 'AAAAC51oMYA:APA91bECgaySlBVXpXxzSRHl2a_mn7H_O117HoHpj_lqYPmJdMz5sCB4bZ7DLKHy_Y9IeZ5HC0QlPCH-aWmIvoOJDbIbiOwoQeMPunPfoCpB1EYFLSr5yaL1rAmyvkIcXDyv0AjyK9Q6TbqkzL3dO0-zrdEwMoJCpw';
         this.state.adPublisherData.userTokens.map(
             (tokenKey, index) => {
                let that = this;
                var to = tokenKey;
                 var notification = {
                'title': `${this.props.loggedInUserInfo.Loged_in_user.userName} send a message`,
                'body': this.state.message,
                "icon": this.props.loggedInUserInfo.Loged_in_user.imgStorageURL,
                "click_action": 'https://shahzaib-com-app7.firebaseapp.com/user-dashboard',
                };

                 fetch('https://fcm.googleapis.com/fcm/send', {
        	        'method': 'POST',
        	        'headers': {
        		        'Authorization': 'key=' + key,
        		        'Content-Type': 'application/json'
        	},
        	        'body': JSON.stringify({
        	        	'notification': notification,
        	        	'to': to
        	})
                 }).then(function(response) {
                      console.log(response);
                      that.setState({message: ''});
                  }).catch(function(error) {
                	console.error(error);
             });
      


             }
         )
          
        }
 
      showingPreviousMessages = () => {
          //show messages
          let that = this;
          let ref = firebase.database().ref('messages/' +this.props.loggedInUserInfo.Loged_in_user.userUID+ '/' +  this.props.adPublisherUid );
          ref.on('value', function(snapshot) {
            let allmessagesdata = snapshot.val();
            //converting data in array
            let dataArray = [];
            for(var key in allmessagesdata) {
                dataArray.push(allmessagesdata[key]);
               
            }
            that.setState({allmessages: dataArray});
            console.log(that.state.allmessages);
         
            
          });
      }

    
      componentDidUpdate() {
        const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
        if(messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            console.log('runninggggg')
        }
      }
    

      
    render() {
        const { classes } = this.props;
        const { vertical, horizontal, open } = this.state;

        
        // {console.log(this.props.loggedInUserInfo.Loged_in_user)}
       
         if(this.props.loggedInUserInfo.user_is_logged_in === false) {
            return(
                <div>
                    <Tooltip disableFocusListener title="You are not Logged in Please log in..">
                         <IconButton className={classes.iconbutton} aria-label="Chat" onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })} >
                            <ChatIcon className={classes.icon} />
                          </IconButton>
                    </Tooltip>
                    <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Please Log in to message AD publisher</span>}
                    />
                </div>
            )
        }

        else if(this.props.adPublisherUid === this.props.loggedInUserInfo.Loged_in_user.userUID) {
            return(
            <div>
               
                     <IconButton className={classes.iconbutton}  onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })}  aria-label="Chat" >
                        <ChatIcon className={classes.icon} />
                      </IconButton>
                      <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">This Ad is published by You!</span>}
                    />
            </div>
        )}
        
        else{
        return(
            <div>
               
                     <IconButton className={classes.iconbutton} aria-label="Chat" onClick={this.dialoghandleClickOpen}
                     >
                        <ChatIcon className={classes.icon} />
                      </IconButton>

                      {/* //Dialog */}
                      <Dialog
                    fullScreen
                    open={this.state.dialogOpen}
                    onClose={this.dialoghandleClose}
                    TransitionComponent={Transition}
                    >
                    <div className='messages-header'>
                
                        <Toolbar>
                        <ListItem>
                        <Avatar alt={this.state.adPublisherData.userName}
                        src={this.state.adPublisherData.imgStorageURL}
                        className={classNames( classes.bigAvatar)} />
                            
                     
                        <ListItemText primary={this.state.adPublisherData.userName} secondary="bazooka" />
                        </ListItem>

                        <div className='closeIconBtn'>
                        <IconButton color="inherit" className={classes.closingbtn}  onClick={this.dialoghandleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        </div>

                        
                        </Toolbar>
                 
                        </div>

                        {/* //messages */}
                        <div className='messages-view'  ref={(el) => { this.messagesContainer = el; }}>
                        
                        
                        {
                            
                            this.state.allmessages.map(
                                (data, index) => {
                                    // console.log(data)
                                     if(data.sender === this.props.loggedInUserInfo.Loged_in_user.userUID) {
                                        return(
                                            <div className='senderMsg-style'>
                                                <p ><span className='msg-style-sen'>{data.message}</span></p>
                                        
                                            </div>
                                        )
                            }
                            
                                    else {
                                        return(
                                            
                                            <div className='recieverMsg-style'>
                                          
                                                <p><span className='msg-style-rec'>{data.message}</span></p>
                                            </div>
                                        )
                            }
                                }
                           ,this)
                          
                           
                        }
                        
                        </div>
            

                     
                        <div className='messages-footer'>
                            <div className='messages-footerchild1'>
                            <Avatar alt={this.state.currentUserData.userName}
                        src={this.state.currentUserData.imgStorageURL}                      
                        className={classNames( classes.bigAvatar)} />
                            </div>
                            <div className='messages-footerchild2'>
                            
                            <MuiThemeProvider theme={theme3}>
                            <TextField
                               className={classes.textFieldmessage}
                            label="message"
                            id="message"
                            color="primary"
                            value={this.state.message}
                            onChange={this.messagehandler}
                            />
                            </MuiThemeProvider>
                       
                            </div>
                            <div className='messages-footerchild3'>
                              <IconButton className={classes.iconbutton} aria-label="send" onClick={this.messageSendFunc} value={this.state.message} >
                                  <SendIcon className={classes.icon2} />
                              </IconButton>
                            </div>
                        
                        </div>
                        
                   
                    </Dialog>
            </div>
        )
    }
    }
}


MessagesContainer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(withStyles(styles)(MessagesContainer));