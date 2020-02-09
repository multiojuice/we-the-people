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

    console.warn('BOO1M', response);


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

export function signOut()  {
  return  async (dispatch) => {
    return dispatch({
      type: types.SIGNIN,
      payload: {
        signedIn: false,
        id: ''
      }
    });
  };
}


export function createSchool(username, password, name, zipcode, description, level, photoURL)  {
  return  async (dispatch) => {

    const response = await fetch(`${Constants.api_url}/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({username, password})
    }).then(res => res.json());

    const {id} = response;
    console.warn('BOO1M', id);

    const accountCreation = await fetch(`${Constants.api_url}/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({name, zipcode, description, level, photoURL, id})
    }).then(res => res.json());

    console.warn('BOOM');

    if (accountCreation) {
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