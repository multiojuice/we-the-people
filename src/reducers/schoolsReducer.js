import {GET_SCHOOL} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function schoolsReducer(state = initialState.schools, action) {

  switch (action.type) {
    case GET_SCHOOL:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, action.payload);

    default:
      return state;
  }
}
