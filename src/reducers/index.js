import { combineReducers } from 'redux';
import loginInformation from './loginInformationReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  loginInformation
});

export default rootReducer;
