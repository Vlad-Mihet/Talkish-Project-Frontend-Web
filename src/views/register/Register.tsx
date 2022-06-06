import { CButton } from 'src/components';
import { useState } from 'react';
import styles from './register.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'src/store/auth/actions';
import type { TAppState } from 'src/store';
import useHandleAuthUserNavigation from 'src/hooks/useHandleAuthUserNavigation';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registrationProcessState = useSelector((state: TAppState) => state.registration);

  const dispatch = useDispatch();

  const handleRegistrationFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(register({
      firstName,
      lastName,
      email,
      password,
    }));
  };

  const location = useLocation();

  useHandleAuthUserNavigation(registrationProcessState);

  return (
    <div className={styles.register}>
      <div className={styles['register-banner']}>
        <div className={styles['register-banner__header']}>
          <h2>register</h2>
        </div>
        <div className={styles['register-banner__content']}>
          {
            registrationProcessState.loading ? (
              // Will replace with a spinner component in the future
              <p>Loading...</p>
            ) : (
              <form
                className={styles.register__form}
                onSubmit={(e) => handleRegistrationFormSubmission(e)}
              >
                <input
                  name="firstName"
                  type="text"
                  placeholder="Your First Name"
                  className={styles['register-form__firstName-input-field']}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Your Last Name"
                  className={styles['register-form__lastName-input-field']}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className={styles['register-form__email-input-field']}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  className={styles['register-form__password-input-field']}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <CButton
                  block
                  type="submit"
                >
                  Register
                </CButton>
                <div className={styles['register-form__no-acount-section']}>
                  {/* Preserve previous location */}
                  <Link
                    to="/auth/login"
                    state={{
                      from: {
                        ...(location.state as any)?.from || null,
                      },
                    }}
                  >
                    Already have an account?
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

export default Register;
