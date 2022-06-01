import { CButton } from 'src/components';
import { useState } from 'react';
import styles from './login.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/store/auth/actions';
import type { TAppState } from 'src/store';
import useHandleAuthUserNavigation from '../../hooks/useHandleAuthUserNavigation';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();

  const loginProcessState = useSelector((state: TAppState) => state.login);

  const dispatch = useDispatch();

  const handleLoginFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(login({
      email,
      password,
    }));
  };

  console.log(location.state);

  useHandleAuthUserNavigation(loginProcessState);

  return (
    <div className={styles.login}>
      <div className={styles['login-banner']}>
        <div className={styles['login-banner__header']}>
          <h2>Login</h2>
        </div>
        <div className={styles['login-banner__content']}>
          {
            loginProcessState.loading ? (
              // Will replace with a spinner component in the future
              <p>Loading...</p>
            ) : (
              <form
                className={styles.login__form}
                onSubmit={(e) => handleLoginFormSubmission(e)}
              >
                <input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className={styles['login-form__email-input-field']}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  className={styles['login-form__password-input-field']}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <CButton
                  block
                  type="submit"
                >
                  Login
                </CButton>
                <div className={styles['login-form__no-acount-section']}>
                  {/* Preserve previous location */}
                  <Link
                    to="/auth/register"
                    state={{
                      from: {
                        ...(location.state as any)?.from || null,
                      },
                    }}
                  >
                    Don&apos;t have an account?
                  </Link>
                </div>
              </form>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Login;
