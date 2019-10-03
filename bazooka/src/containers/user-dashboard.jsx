import React, { Component } from 'react';
import AdCard from '../components/cardAd-display';
import * as firebase from 'firebase';
import {database} from '../index';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../components/css/styles5.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import actionMain from '../store/actions/action-main';
import DeleteAd from '../components/deletingAd';
import ChatList from '../components/chatList';
import Button from '@material-ui/core/Button';
import history from '../pages/history';
import axios from "axios";





//for redux


// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        addsDataFromStore : state.Adds_Data_Updater,
        loggedInUserInfo: state.Loged_in_user_info,
        // decCounter : state.decrementCounter.decrementState
    };
}

function mapDispatchToProps(dispatch) {
     return {
        updatingAddsDatInStore : function (dataArray){
            // console.log("dispatch running");
            // Update in counter 13 -- commented out below line and used middleware for call
            //return dispatch(CounterAction.incrementWithValue(value));
            //return dispatch(AddsDataMiddleware.AddsDataGenerator());
            dispatch(actionMain.Adds_Data_meh(dataArray))
        },
        getting_user_data_logout: function() {
            return dispatch(actionMain.Delete_logged_in_user_info_meh());
          }

    //     getting_user_data : function (value){
    //         return dispatch(actionMain.logged_in_user_info_meh(value));
    //       },
        
        
    };
    
}



//for tabs
function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

const styles = {
    root: {
      flexGrow: 1,
    },
    tabRoot: {
        
          '&$tabSelected': {
            'color': '#2fdab8',
           
          },
          '&:focus': {
            'color': '#2fdab8',
          },
    },
    tabsIndicator: {
        'background-color': '#2fdab8',
    },
    tabSelected: {
        'color': '#2fdab8',
    },
    logoutBtn: {
        'background-color': '#2fdab8',
        'text-align': 'center',
        'width': '30%',
        'margin': '15px auto',
    }
    
  };
  


class UserDashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            currentadData: [],
            allChatData: [],
            allChatUsersKeysInfo: [],
        }
    }

    componentDidMount() {

        let that = this;
        if(this.props.addsDataFromStore.adds_data_avalibility === false)
            {
                //bringing data from server
                console.log('DATA FROM SERVER')
                let url = 'https://bazooka-server.herokuapp.com/api/viewProducts';
                axios.get(url).then((res) => {
                   console.log( res.data)
                   var dataFromServer = res.data;
                   dataFromServer.sort(function(a,b){
                    let c = new Date(a.dateOfPublish);
                    let d = new Date(b.dateOfPublish);
                    return d-c;
                    });
                 
                  console.log(dataFromServer);
                  that.props.updatingAddsDatInStore(dataFromServer);
                    
                  }).catch((error) => {
                    console.log( error)
                  })
                
            
                //bringing data from firebase
                // let path = database.ref('products-info/');
                // let that=this;
                // path.on("value", function(dataSnapshot) {
                //     var data = dataSnapshot.val();
                //     console.log('DATA FROM FIREBASE')
                //     console.log(data)
                //     //converting data to array
                //     var dataArray = [];
                //     for(var key in data) {
                //         dataArray.push(data[key]);
                       
                //     }
                    // { console.log(dataArray)}
                    // {console.log('1 array toredux')}
                    //sorting with date
                    // dataArray.sort(function(a,b){
                    //     let c = new Date(a.dateOfPublish);
                    //     let d = new Date(b.dateOfPublish);
                    //     return d-c;
                    //     });
                     
                    //  { console.log(dataArray)}
            //    {console.log('2 array toredux')}
                    // that.props.updatingAddsDatInStore(data);
                // }) 
                
            }   
       
    
            //for chats
            if(this.props.loggedInUserInfo.user_is_logged_in === true && this.state.allChatData.length === 0) {
                this.bringChatData();
            }
   
            
    }
    bringChatData = () => {
        //for chats
        let that = this;
        if(this.props.loggedInUserInfo.user_is_logged_in === true && this.state.allChatData.length === 0) {
            let userInfo = this.props.loggedInUserInfo.Loged_in_user;
            let userUID = userInfo.userUID;
            let ref = firebase.database().ref('messages/' + userUID);
                 ref.on('value', function(snapshot) {
                 let data = snapshot.val();
                     // adding keys in array
                    let dataKeysArray = [];
                    for(var key in data) {
                        dataKeysArray.push(key);
           
                     }
        that.setState({allChatData: data});
       
        // console.log(that.state.allChatData);
        that.bringChatUsersInfoFromFirebase(dataKeysArray);

        
    })

        }
    }

    bringChatUsersInfoFromFirebase = (ids) => {
        //bringong chat users info from firebase
        var dataArray = [];
        ids.map(
            (data, index) => {
                //bringing data from firebase
                let path = database.ref('users/' + data);
                let that=this;
                path.on("value", function(dataSnapshot) {
                    var data = dataSnapshot.val();
                    //converting data to array
                    dataArray.push(data)
                    
                    
                    that.setState({allChatUsersKeysInfo: dataArray});
                    // console.log(that.state.allChatUsersKeysInfo)
                    
                })
            }
        )



        // 
    }

    //tabs
    handleChange = (event, value) => {
        this.setState({ value });
      };

      logout = () => {
        //   console.log(this.props.loggedInUserInfo)
        //   console.log('FINALLY')
        localStorage.removeItem("bazooka_auto_login_data");
        this.props.getting_user_data_logout()
        //  console.log(this.props.loggedInUserInfo)
        //  console.log('FINALLY')
        history.push('/');

      }
      

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div>
                <div>
                 <Paper className={classes.root}>
                    <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                    >
                    <Tab label="My Ads" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                    <Tab label="Chats" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.bringChatData} />
             
                    </Tabs>
                </Paper>
                {value === 0 && <TabContainer>
                    <div className='ad-cards-container-main'>
                        
                        {
                            
            this.props.addsDataFromStore.Adds_Data.map(
            (data, index) => {
                var a = data;
                
                if(data.userUid === this.props.loggedInUserInfo.Loged_in_user.userUID) {
                return(
                    <div key={a.productId}>
                    <DeleteAd productId={a.productId} />
                <AdCard key={a.productId} adTitle={a.adTitle} adDecription={a.adDescription} city={a.city} date={a.dateOfPublish} publisherName={a.name} phoneNumber={a.phoneNumber} price={a.price} productId={a.productId} productimg={a.productImgStorageURL} userUid={a.userUid} category={a.category} />
                </div>
            )}
            }
            )
    }
          </div>   
                    
                    
                    </TabContainer>}
                {value === 1 && <TabContainer>
                    <div className='chat-list'>
                    
                    {
                          this.state.allChatUsersKeysInfo.map(
                            (data, index) => {
                                var b = data;
                                // console.log(b);
                                return(
                                    <div key={b.userUID}>
                                        <ChatList name={b.userName} imgUrl={b.imgStorageURL} userUid={b.userUID}  />
                                    </div>
                                )
                            })
                    }
                    </div>
                </TabContainer>}
                
                </div>
                <div className='logout-btn'>
                <Button variant="contained" className={classes.logoutBtn} onClick={this.logout}>
                    Log out
                </Button>
                    </div>
            </div>
        );
    }
}


UserDashboardContainer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(withStyles(styles)(UserDashboardContainer));