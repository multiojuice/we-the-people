import {BLANK} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function loginInformationReducer(state = initialState.loginInformation, action) {

  switch (action.type) {
    case BLANK:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {blank: true});

    default:
      return state;
  }
}
