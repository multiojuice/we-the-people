import fetch from 'node-fetch';
import Constants from '../constants/constants';
import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function ahh(email)  {
  return  async (dispatch) => {

    const response = await fetch(`${Constants.api_url}/blank`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({email})
    }).then(res => res.text());

    if (response) {
      return dispatch({
        type: types.BLANK,
        payload: {
          
        }
      });
    }
  };
}