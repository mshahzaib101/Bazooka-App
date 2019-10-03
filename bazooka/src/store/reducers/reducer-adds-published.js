import actionMain from '../actions/action-main'

const INITIAL_STATE = {
    Adds_published_byuser : {},
  }



  function Loged_in_user_info(state = INITIAL_STATE, action) {
    switch (action.type) {  
    case actionMain.Adds_published_byuser_var:
      return Object.assign({}, state, { Loged_in_user: action.payload,});
    //   case users.changing_fb_btn_view:
    //   return Object.assign({}, state, { user_is_logged_in: action.payload});
    default:
      return state
    }
  }
  
  export default Loged_in_user_info;