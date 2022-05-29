import { Endpoints } from 'src/config';
import axios from 'axios';
import { AuthActions, JWT_TOKEN_KEY } from './constants';
import setToLocalStorage from 'src/utils/setToLocalStorage';
import retrieveFromLocalStorage from 'src/utils/retrieveFromLocalStorage';
import removeFromLocalStorage from 'src/utils/removeFromLocalStorage';

import type { TDispatch } from '..';
import type { LoginCredentials } from './types';

const { ROOT, AUTH, LOGIN } = Endpoints;

const loginEndpointUrl = `${ROOT}/${AUTH}/${LOGIN}`;

export const login = (authData: LoginCredentials) => async (dispatch: TDispatch) => {
  dispatch({
    type: AuthActions.LOGIN_REQUEST,
  });

  const existingJwtToken = retrieveFromLocalStorage(JWT_TOKEN_KEY);

  if (existingJwtToken) {
    dispatch({
      type: AuthActions.LOGIN_SUCCESS,
      payload: {
        jwtToken: existingJwtToken,
      },
    });
  } else {
    try {
      const response = await axios.post(loginEndpointUrl, authData);

      const jwtToken = response.data.payload;

      if (!jwtToken) throw new Error('Couldn\'t retrieve JWT');

      setToLocalStorage(JWT_TOKEN_KEY, jwtToken);

      dispatch({
        type: AuthActions.LOGIN_SUCCESS,
        payload: {
          jwtToken,
        },
      });
    } catch (err) {
      dispatch({
        type: AuthActions.LOGIN_FAILURE,
        payload: {
          error: err,
        },
      });
    }
  }
};

export const logout = () => {
  removeFromLocalStorage(JWT_TOKEN_KEY);

  return {
    type: AuthActions.LOGOUT,
  };
};
