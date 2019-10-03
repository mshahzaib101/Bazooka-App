import actionMain from '../actions/action-main'

const INITIAL_STATE = {
    token : '',
    token_avability: false,
    cloud_msg_recieved: false,
  }



  function Token_info(state = INITIAL_STATE, action) {
    switch (action.type) {  
    case actionMain.Cloud_token_var:
      return Object.assign({}, state, { token: action.payload, token_avability: true});
      // case actionMain.Display_cloud_msg_var:
    
      //   if(state.cloud_msg_recieved === false) {
      //     return(Object.assign({}, state, {cloud_msg_recieved: true}))
      //   }
      //   else{
      //     return(Object.assign({}, state, {cloud_msg_recieved: false}))
      //   }
      
      
    //   case users.changing_fb_btn_view:
    //   return Object.assign({}, state, { user_is_logged_in: action.payload});
    default:
      return state
    }
  }
  
  export default Token_info;