import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';

import { useAppDispatch, useAppSelector } from '@/app/store';
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from '@/features/user/userSlice';
import styles from '@/styles/Home.module.css';

const Homepage = () => {
  const isSignedIn = useAppSelector(selectSignedIn);
  const dispatch = useAppDispatch();

  const loginSuccessHandler = (res: GoogleCredentialResponse) => {
    dispatch(setSignedIn(true));
    dispatch(setUserData(res));
  };

  return (
    <div
      className={styles.home__page}
      style={{ display: isSignedIn ? 'none' : '' }}
    >
      {!isSignedIn ? (
        <div className={styles.login__message}>
          <h2>📗</h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading some quality blogs.
          </p>
          <GoogleLogin
            onSuccess={loginSuccessHandler}
            onError={() => console.log('login failed')}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Homepage;
