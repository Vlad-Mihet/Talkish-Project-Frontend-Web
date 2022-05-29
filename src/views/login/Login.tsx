import { CButton } from 'src/components';
import { useEffect, useState } from 'react';
import styles from './login.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/store/auth/actions';
import type { TAppState } from 'src/store';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storeAuthState = useSelector((state: TAppState) => state.login);

  const dispatch = useDispatch();

  const resetFormData = (): void => {
    setEmail('');
    setPassword('');
  };

  const handleLoginFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(login({
      email,
      password,
    }));
  };

  useEffect(() => () => {
    // Reset login form data on unmount
    resetFormData();
  }, []);

  return (
    <div className={styles.login}>
      <div className={styles['login-banner']}>
        <div className={styles['login-banner__header']}>
          <h2>Login</h2>
        </div>
        <div className={styles['login-banner__content']}>
          {
            storeAuthState.loading ? (
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
              </form>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Login;
