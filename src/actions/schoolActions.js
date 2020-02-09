import fetch from 'node-fetch';
import Constants from '../constants/constants';
import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function getSchool(id)  {
  return  async (dispatch) => {

    const response = await fetch(`${Constants.api_url}/public-schools?id=${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(res => res.json());

    console.warn('BOO1M', response);

    if (response) {
      return dispatch({
        type: types.GET_SCHOOL,
        payload: {
          [id]: response[0]
        }
      });
    }
  };
}
