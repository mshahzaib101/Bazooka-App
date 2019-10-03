import actionMain from '../actions/action-main';

const INITIAL_STATE = {
    Ad_Preview_Data : {},
    add_preview_avalibility: false,
  }



  function Ad_Preview_Updater(state = INITIAL_STATE, action) {
    switch (action.type) {  
    case actionMain.Ad_Preview_var:
      return Object.assign({}, state, { Ad_Preview_Data: action.payload, add_preview_avalibility: true});

    default:
      return state
    }
  }
  
  export default Ad_Preview_Updater;