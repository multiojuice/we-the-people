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
          id: response.id,
          type: response.type
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
        id: '',
        type: ''
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
      body: JSON.stringify({username, password, type: 'S'})
    }).then(res => res.json());

    const {id} = response;

    const accountCreation = await fetch(`${Constants.api_url}/public-schools`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({name, zipcode, description, level, photoURL, id})
    }).then(res => res.json());

    if (accountCreation) {
      return dispatch({
        type: types.SIGNIN,
        payload: {
          signedIn: true,
          id: response.id,
          type: 'S'
        }
      });
    }
  };
}

export function createUniversity(username, password, name, zipcode, description, photoURL)  {
  return  async (dispatch) => {

    const response = await fetch(`${Constants.api_url}/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({username, password, type: 'U'})
    }).then(res => res.json());

    const {id} = response;

    const accountCreation = await fetch(`${Constants.api_url}/universities`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({name, zipcode, description, photoURL, id})
    }).then(res => res.json());


    if (accountCreation) {
      return dispatch({
        type: types.SIGNIN,
        payload: {
          signedIn: true,
          id: response.id,
          type: 'U'
        }
      });
    }
  };
}

export function createMentor(username, password, name, universityName, tags)  {
  return  async (dispatch) => {

    const response = await fetch(`${Constants.api_url}/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({username, password, type: 'M'})
    }).then(res => res.json());

    const {id} = response;

    const univeristy = await fetch(`${Constants.api_url}/universities?name=${universityName}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
    }).then(res => res.json());

    const arrayTags = tags.split(',');

    const accountCreation = await fetch(`${Constants.api_url}/students`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({name, tags: arrayTags, id, univeristy: univeristy[0].id})
    }).then(res => res.json());

    if (accountCreation) {
      return dispatch({
        type: types.SIGNIN,
        payload: {
          signedIn: true,
          id: response.id,
          type: 'M'
        }
      });
    }
  };
}


export function createEvent(owner, tags, name, description)  {
  return  async (dispatch) => {
    const arrayTags = tags.split(',');

    const response = await fetch(`${Constants.api_url}/events`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({tags: arrayTags, owner, name, description})
    }).then(res => res.json());

    if (response) {
      return dispatch({
        type: types.CREATE_EVENT,
        payload: {
          response,
          completedEventCreate: true
        }
      });
    }
  };
}

export function toggleEventFinished() {
  return  async (dispatch) => {
    return dispatch({
      type: types.CREATE_EVENT,
      payload: {
        completedEventCreate: false
      }
    });
  }
}