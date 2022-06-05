import axios from 'axios';
import { useEffect, useState } from 'react';
import { Endpoints } from '../config';
import { JWT_TOKEN_KEY } from '../store/auth/constants';
import { AuthUser } from '../types/models';
import decodeJwtToken from '../utils/decodeJwtToken';
import retrieveFromLocalStorage from '../utils/retrieveFromLocalStorage';

const useAuthUser = (): AuthUser => {
  const [user, setUser] = useState<AuthUser>({
    authorId: '',
    email: '',
    firstName: '',
    id: '',
    lastName: '',
  });

  useEffect(() => {
    const jwtToken = retrieveFromLocalStorage(JWT_TOKEN_KEY);

    if (jwtToken) {
      const jwtUserInfo = decodeJwtToken(jwtToken);
      const userId = (jwtUserInfo as any).UserId;

      const fetchUserEndpoint = `${Endpoints.ROOT}/${Endpoints.USERS}/${userId}`;

      axios.get(fetchUserEndpoint)
        .then((res) => {
          setUser(res.data.payload);
        })
        .catch((err) => {
          console.error(`There was an issue retrieving the current user: ${err}`);
        });
    }
  }, []);

  return user;
};

export default useAuthUser;
