import { combineReducers } from 'redux';
import loginInformation from './loginInformationReducer';
import schools from './schoolsReducer';
import events from './eventsReducer';
import mentors from './mentorsReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  loginInformation,
  schools,
  events,
  mentors
});

export default rootReducer;
