import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

const handleAuthenticatedUserNavigation = (): void => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirectedFrom: string | null = (location.state as any)?.from?.pathname || null;

  // If not redirected from anywhere else, we'll navigate the user home
  navigate(redirectedFrom || '/');
};

export default handleAuthenticatedUserNavigation;
