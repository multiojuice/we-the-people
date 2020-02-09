import fetch from 'node-fetch';
import Constants from '../constants/constants';
import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function signIn(username, password)  {
  return  async (dispatch) => {

    const response = await fetch(`${Constants.api_url}/login?username=${username}&password=${password}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(res => res.json());

    if (response) {
      return dispatch({
        type: types.SIGNIN,
        payload: {
          signedIn: true,
          id: response.id
        }
      });
    }
  };
}