import {GET_EVENT, CREATE_EVENT} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function schoolsReducer(state = initialState.events, action) {

  switch (action.type) {
    case GET_EVENT:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, action.payload);

    case CREATE_EVENT:
      return objectAssign({}, state, action.payload);

    default:
      return state;
  }
}
