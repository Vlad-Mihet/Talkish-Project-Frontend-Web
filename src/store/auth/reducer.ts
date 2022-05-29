import { AuthActions } from './constants';

const loginInitialState = {
  loading: false,
  token: null,
  error: null,
};

const registrationInitialState = {
  loading: false,
  token: null,
  error: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const loginReducer = (state = loginInitialState, action: any): void | any => {
  switch (action.type) {
    case AuthActions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.jwtToken,
      };
    case AuthActions.LOGIN_FAILURE:
      return {
        ...state,
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
        loading: true,
        error: null,
      };
    case AuthActions.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.jwtToken,
      };
    case AuthActions.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
