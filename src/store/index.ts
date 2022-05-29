import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  loginReducer,
  registrationReducer,
} from './auth/reducer';
import thunk from 'redux-thunk';

import type { AnyAction } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';

const rootReducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
});

export type TAppState = ReturnType<typeof rootReducer>;
export type TDispatch = ThunkDispatch<TAppState, void, AnyAction>;

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
