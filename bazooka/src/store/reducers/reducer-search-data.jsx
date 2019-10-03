import actionMain from '../actions/action-main'

const INITIAL_STATE = {
    searchData : '',
  }



  function SearchData(state = INITIAL_STATE, action) {
    switch (action.type) {  
    case actionMain.Search_What_var:
      return Object.assign({}, state, { searchData: action.payload,});
     
    default:
      return state
    }
  }
  
  export default SearchData;