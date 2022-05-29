import { JWT_TOKEN_KEY } from '../store/auth/constants';
import retrieveFromLocalStorage from './retrieveFromLocalStorage';

const isAuthenticated = (): boolean => (!!retrieveFromLocalStorage(JWT_TOKEN_KEY));

export default isAuthenticated;
