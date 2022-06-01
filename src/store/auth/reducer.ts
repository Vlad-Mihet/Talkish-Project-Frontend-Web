import { AuthActions } from './constants';

const loginInitialState = {
  loading: false,
  success: false,
  error: null,
};

const registrationInitialState = {
  loading: false,
  success: false,
  error: null,
};

/*
  Note: Will split up this file into 2 separate files (login & registration),
  each containing a reducer
*/

// eslint-disable-next-line @typescript-eslint/default-param-last
export const loginReducer = (state = loginInitialState, action: any): void | any => {
  switch (action.type) {
    case AuthActions.LOGIN_REQUEST:
      return {
        ...state,
        success: false,
        loading: true,
        error: null,
      };
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case AuthActions.LOGIN_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const registrationReducer = (state = registrationInitialState, action: any): void | any => {
  switch (action.type) {
    case AuthActions.REGISTER_REQUEST:
      return {
        ...state,
        success: false,
        loading: true,
        error: null,
      };
    case AuthActions.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case AuthActions.REGISTER_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
