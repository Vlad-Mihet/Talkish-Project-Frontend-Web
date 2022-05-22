import { Endpoints } from 'src/config';
import axios from 'axios';
import { AuthActions, JWT_TOKEN_KEY } from './constants';
import type { TDispatch } from '..';
import type { LoginCredentials } from './types';
import setToLocalStorage from 'src/utils/setToLocalStorage';
import retrieveFromLocalStorage from 'src/utils/retrieveFromLocalStorage';
import removeFromLocalStorage from 'src/utils/removeFromLocalStorage';

const { ROOT, AUTH, LOGIN } = Endpoints;

const loginEndpointUrl = `${ROOT}/${AUTH}/${LOGIN}`;

export const login = (authData: LoginCredentials) => async (dispatch: TDispatch) => {
  const existingJwtToken = retrieveFromLocalStorage(JWT_TOKEN_KEY);

  if (existingJwtToken) {
    dispatch({
      type: AuthActions.LOGIN_SUCCESS,
      payload: {
        jwtToken: existingJwtToken,
      },
    });
  } else {
    dispatch({
      type: AuthActions.LOGIN_REQUEST,
    });

    try {
      const response = await axios.post(loginEndpointUrl, authData);

      const jwtToken = response.data.data.token;

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
