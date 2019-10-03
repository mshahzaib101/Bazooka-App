import actionMain from '../actions/action-main';

const INITIAL_STATE = {
    Adds_Data : [],
    adds_data_avalibility: false,
  }



  function Adds_Data_Updater(state = INITIAL_STATE, action) {
    switch (action.type) {  
    case actionMain.Adds_Data_var:
  
    { console.log(action.payload)}
    {console.log('2 reducer running')}
      return Object.assign({}, state, { Adds_Data: action.payload, adds_data_avalibility: true});
    //   case users.changing_fb_btn_view:
    //   return Object.assign({}, state, { user_is_logged_in: action.payload});
    default:
      return state
    }
  }
  
  export default Adds_Data_Updater;