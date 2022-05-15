import { CButton } from 'src/components';
import { useState } from 'react';
import styles from './login.module.scss';
import type { AxiosRequestConfig } from 'axios';
import { Endpoints } from 'src/config';
import axios from 'axios';

const submitLoginDataURI = `${Endpoints.ROOT}/${Endpoints.AUTH}/${Endpoints.LOGIN}`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const axiosRequest: AxiosRequestConfig = {
      url: submitLoginDataURI,
      method: 'POST',
      data: {
        email,
        password,
      },
    };

    try {
      await axios(axiosRequest);

      // eslint-disable-next-line no-alert
      alert('Login successful!');
    } catch (err: any) {
      // eslint-disable-next-line no-alert
      alert(err.response.data.errorMessage);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles['login-banner']}>
        <div className={styles['login-banner__header']}>
          <h2>Login</h2>
        </div>
        <div className={styles['login-banner__content']}>
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
        </div>
      </div>
    </div>
  );
}

export default Login;
