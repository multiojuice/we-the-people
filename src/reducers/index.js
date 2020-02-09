import { combineReducers } from 'redux';
import loginInformation from './loginInformationReducer';
import schools from './schoolsReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  loginInformation,
  schools
});

export default rootReducer;
