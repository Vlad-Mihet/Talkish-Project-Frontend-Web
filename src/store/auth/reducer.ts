import { AuthActions } from './constants';

const initialState = {
  loading: false,
  token: null,
  error: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last, consistent-return
export const reducer = (state = initialState, action: any): void | any => {
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
        token: action.payload.token,
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
