import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';             // for reciving data and for business logic
// importing reducers
import Loged_in_user_info from './reducers/reducer-current-user-info';
import Adds_Data_Updater from './reducers/reducer-adds-data';
import Ad_Preview_Updater from './reducers/reducer_ad-preview';
import Token_info from './reducers/reducer-cloud-token';
import SearchData from './reducers/reducer-search-data';



const middleware = applyMiddleware(thunk);  // for middlewares

// -- this will combine all reducers in one
const rootReducer = combineReducers({
    Loged_in_user_info,
    Adds_Data_Updater,
    Ad_Preview_Updater,
    Token_info,
    SearchData,
// more reducers go here
})

// -- passing root reducer
// -- pass middleware in createStore
let store = createStore(
    rootReducer,
    middleware
  )

  export default store;  // to main index,js