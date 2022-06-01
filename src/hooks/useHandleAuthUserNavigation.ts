import isAuthenticated from 'src/utils/isAuthenticated';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

type AuthState = {
  success: boolean;
  error: any;
  loading: boolean;
};

const useHandleAuthUserNavigation = (authState: AuthState): void => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuth = isAuthenticated();

  const redirectedFrom: string | null = (location.state as any)?.from?.pathname || null;

  useEffect(() => {
    if (isAuth || authState.success) {
      // If not redirected from anywhere else, we'll navigate the user home
      navigate(redirectedFrom || '/');
    }
  }, [authState]);
};

export default useHandleAuthUserNavigation;
