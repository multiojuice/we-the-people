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

    console.warn('BOOM', response)

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
"name": "James Monroe High School",
"Address": "164 Alexander St, Rochester, NY 14607",
"zipcode": 14607,
"description": "A Highschool in ROCHESTER EHEHEHEHEHHE",
"photoURL": "https://www.rcsdk12.org/cms/lib/NY01001156/Centricity/Domain/11468/Monroe_137.jpg",
"level": "High School",
"id": "48062b08-2598-4eb2-bb12-c3b405e18fdb"
export function createAccountAction(username, password, name, Address, zipcode, description, photoURL, level)  {
  return  async (dispatch) => {

    const response = await fetch(`${Constants.api_url}/login?username=${username}&password=${password}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        
      })
    }).then(res => res.json());



    console.warn('BOOM', response)

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
