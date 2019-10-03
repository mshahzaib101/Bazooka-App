import React, { Component } from 'react';
import ButtonAppBar from '../components/appbar';
import LoginButton from '../components/login-button';
import { connect } from 'react-redux';
import actionMain from '../store/actions/action-main';
import HeaderTop from '../components/header-top';
import * as firebase from 'firebase';
import {database, messaging} from '../index';






// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        loggedInUserInfo : state.Loged_in_user_info,
        // cloudmsginfo : state.Token_info,
        // decCounter : state.decrementCounter.decrementState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getting_user_data : function (value){
            return dispatch(actionMain.logged_in_user_info_meh(value));
          },
        sendingToken : function (value){
            return dispatch(actionMain.Cloud_token_meh(value));
          },
        //   Display_cloud_msg: function (value){
        //     return dispatch(actionMain.Display_cloud_msg_meh(value));
        //   },
        // increment: () => dispatch(CounterAction.increment()),
        
    };
}




class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        
        let that = this;
           //requesting permission
           messaging.requestPermission()
           .then((succ)=>{
            //    console.log('have permission')
            //            console.log(succ)
                       return messaging.getToken();
         })
            .then((token)=>{
                if (token) {
                        // console.log(token);
                        that.props.sendingToken(token)
                }
            })
         .catch((err)=>{
        //    console.log('error occured')
        //                console.log(err)
         })




         
    }


 

    render() {
        return(
            <div>
             
               <HeaderTop />
       
              
            </div>
        )
    }
}

// connect function will wrap component and attached properties
export default connect(mapStateToProps,mapDispatchToProps)(Header);
