import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import * as firebase from 'firebase';
import {database, messaging} from '../index';
import imageFetcherToStorage from './functions/image-fetcher-to-storage';
import './css/styles2.css';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';





// firebase login
const Googleprovider = new firebase.auth.GoogleAuthProvider();
const Facebookprovider = new firebase.auth.FacebookAuthProvider();
// Get a reference to the database service

// firebase login

// material ui
function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
// material ui




const styles = {
    loginbtn: {
        width : '100%',
        'margin-bottom' : '20px',
        background: '#4267b2',
        'border-radius': '5px',
        color: 'white',
        height: '50px',
        'text-align': 'center',
        'padding': '0px 0px 0px 0px',
        ['@media (max-width:700px)']: { // eslint-disable-line no-useless-computed-key
          height: '30px',
          'margin-bottom' : '15px',
        },

    },
    loginGooglebtnj: {
        width : '100%',
        'margin-bottom' : '2px',
        background: '#dd4b39',
        'border-radius': '5px',
        color: 'white',
        height: '50px',
        'text-align': 'center',
        '&:hover': {
          backgroundColor: 'red',
        },
        'padding': '0px 0px 0px 0px',
        ['@media (max-width:700px)']: { // eslint-disable-line no-useless-computed-key
          height: '30px',
          'margin-bottom' : '0px',
        },
        

    },
    componentbtn: {
      color: '#fff',
      '&:hover': {
          color: '#2fdab8',
        },
  },
      notnowbtn: {
        color: 'black',
        '&:hover': {
            color: '#2fdab8',
          },
          '&:active': {
            color: '#2fdab8',
          },
     },
    
     listItem: {
      'padding': '0px 0px 0px 0px',
      'margin': '0px 0px 0px 0px',
     },
     Avimg: {
      'padding': '0px 0px 0px 0px',
      'margin': '2px 0px 2px 20px',
      'height': '33px',
      'width': '30px',
      ['@media (max-width:560px)']: { // eslint-disable-line no-useless-computed-key
        'height': '30px',
      'width': '27px',
      'margin': '3px 0px 3px 18px',
      },
      ['@media (max-width:350px)']: { // eslint-disable-line no-useless-computed-key
        'height': '27px',
      'width': '24px',
      'margin': '5px 0px 1px 16px',
      },
     },
   
}


class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dialogOpen: false,
        }
    }

    
    dialogHandleClickOpen = () => {
        this.setState({ dialogOpen: true });        // for dialog opening
        //opening token notifier
       
      };
    
    dialogHandleClose = () => {
        this.setState({ dialogOpen: false });       // for dialog closing
      };

      // firebase login
    loginWithGoogle = () => {
        let that = this;
        firebase.auth().signInWithPopup(Googleprovider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            // console.log(user);
            // sending data to firebase redux
            that.checkingForSendingUserInfo(user.displayName, user.email, user.uid, user.photoURL);
            
            that.dialogHandleClose();  //closing dialog box
          
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            // console.log(errorMessage);
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    loginWithFacebook = () => {
        let that = this;
        firebase.auth().signInWithPopup(Facebookprovider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            // console.log(user);
             // sending data to firebase redux
             that.checkingForSendingUserInfo(user.displayName, user.email, user.uid, user.photoURL);
            that.dialogHandleClose();  //closing dialog box
         
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            // console.log(errorMessage);
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

      // firebase login

      //sending user data to redux and firebase
      sendingData = (name, email, uid, imageUrl) => {
        const info = {
          userName: name,
          userEmail: email,
          userUID: uid,
          userImageURL : imageUrl,
        }
        // fetching url of img storage
        let that = this;
        // cloud function token
        

         imageFetcherToStorage('userProfile-images', uid, imageUrl)
            .then(
              (path) => {
                // console.log('5 then running');
                path.getDownloadURL().then(function(url) {

                  //checking token
                  let userToken = [];
                  if(that.props.sendingTokenInfo.token_avability === true) {
                     userToken.push(that.props.sendingTokenInfo.token);
                  }

                  // Insert url into an <img> tag to "download"
                  // console.log('6 url get'+url );




                  Object.assign(info, {imgStorageURL: url}, {userTokens: userToken});

                  


                     // sending data to redux
                     that.props.gettingUserData(info);

                     //sending data to local storage
                       // console.log('FINAL DATA');
                      // console.log(that.props.sendingUserInfoToComponent.Loged_in_user);
                      let dataToString = JSON.stringify(that.props.sendingUserInfoToComponent.Loged_in_user);
                      // console.log(dataToString);
                      localStorage.setItem("bazooka_auto_login_data", dataToString);
                      // let dataFromStorafe = JSON.parse(localStorage.getItem("bazooka_auto_login_data"));
                      // console.log(dataFromStorafe)


                     // reciving from redux
                    //  console.log(that.props.sendingUserInfoToComponent)
                //writing data in firebase
                function writeUserData(data) {
                  // console.log('6 sending data to firebase');
                  firebase.database().ref('users/' + data.userUID).set(data);
                }
                writeUserData(that.props.sendingUserInfoToComponent.Loged_in_user);
                })
                // console.log(info)
              }
            )
         //done
        
              }
      //sending user data to redux

              // A SIMPLER CHECKER
      checkingForSendingUserInfo = (name, email, uid, imageUrl) => {
        let that = this;
        //bringing data from firebase
          let rootRef = database.ref('users/' + uid);
          rootRef.once("value")
          .then(function(snapshot) {
            // console.log(snapshot)
            // console.log(snapshot.val());
           let data = snapshot.val();
           // implementing logc
           if(data === null) {
            //  console.log('if running , bringing data from facebook')
            that.sendingData(name, email, uid, imageUrl);
           } 
           else {
            console.log('else running , bringing data from firebase')
            //sending token to database
          
            console.log(that.props.sendingTokenInfo)
            if(that.props.sendingTokenInfo.token_avability === true) {
              let rootTokenRef = database.ref('users/' + uid + '/' + 'userTokens');
                  rootTokenRef.once("value")
                    .then(function(snapshot) {
           
                       let tokens = snapshot.val();
                       console.log(tokens);
                       console.log('token data from firebase');
                       if(tokens === null) {
                        tokens = [];
                        tokens.push(that.props.sendingTokenInfo.token);
                       }
                       else if(tokens[0] !== that.props.sendingTokenInfo.token) {
                        tokens.push(that.props.sendingTokenInfo.token);
                       }
                       
                        
                       data.userTokens = tokens;
                       console.log(data);
              firebase.database().ref('users/' + data.userUID).set(data);

                      })}
              //sending data to redux
              // sending data to redux
              that.props.gettingUserData(data);

              //sending data to locaal storage

              // reciving from redux
              // console.log('FINAL DATA');
              // console.log(that.props.sendingUserInfoToComponent.Loged_in_user);
              let dataToString = JSON.stringify(that.props.sendingUserInfoToComponent.Loged_in_user);
              // console.log(dataToString);
              localStorage.setItem("bazooka_auto_login_data", dataToString);
              // let dataFromStorafe = JSON.parse(localStorage.getItem("bazooka_auto_login_data"));
              // console.log(dataFromStorafe)
           }
          
      });
      }

      firebaseCloudSetup = () => {
        let token = this.props.sendingTokenInfo;
        // console.log(token);
      }

      componentWillMount()
      {
        //bringing data from local storage
         let dataFromStorage = JSON.parse(localStorage.getItem("bazooka_auto_login_data"));
        //  console.log(dataFromStorage)
        if(dataFromStorage !== null) {
          // console.log('Yahooooooooooooooo');
          this.props.gettingUserData(dataFromStorage);
        }
        

      }

    render() {
        // for dialog material ui
        const { classes } = this.props;

          //checking wether user is login
          if(this.props.sendingUserInfoToComponent.user_is_logged_in === true) {
            return(
              <div>
                <Link to="/user-dashboard">
                <ListItem button className={classes.listItem}>
                <Avatar alt="profile-pic" className={classNames(classes.Avimg)} src={this.props.sendingUserInfoToComponent.Loged_in_user.imgStorageURL} />
                <ListItemText>
                <span className='displayName subheadBtns'>{this.props.sendingUserInfoToComponent.Loged_in_user.userName}</span>
                </ListItemText>
                </ListItem>
                </Link>
              </div>
            )
          }
          else{
            return(
            <div>
                 <Button className={classNames(classes.componentbtn)} onClick={this.dialogHandleClickOpen} >
                    <span className='subheadBtns'>Login</span>
                 </Button>

                    {/* matterial ui dialog code */}
              <div className='dialog'>
                    <Dialog
          open={this.state.dialogOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.dialogHandleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          fullWidth="true"
          
        >
          
            <h2 className='login-dialog'>Join today..</h2>
          
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            {/* facebook login btn */}
            <Button variant="contained" color="primary" size="large"  className={classNames(classes.loginbtn)}  onClick={this.loginWithFacebook}>
            
            <span className='signin-btn'>Continue with Facebook</span> 
            </Button>
            <br />
            {/* google login btn */}
            <Button variant="contained" color="primary" size="large" className={classNames(classes.loginGooglebtnj)}  onClick={this.loginWithGoogle}>
            <span className='signin-btn'>Sign in with Google</span> 
            </Button>
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
           
            <Button onClick={this.dialogHandleClose} className={classNames(classes.notnowbtn)}>
              Not now
            </Button>
          </DialogActions>
        </Dialog>
        </div>
                {/* matterial ui dialog code */}
            </div>)
          }
        
    }
}


export default withStyles(styles)(LoginButton);

