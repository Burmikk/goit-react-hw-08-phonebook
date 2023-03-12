import { useState, useMemo } from 'react';
import styles from './login.module.scss';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { RotatingLines } from 'react-loader-spinner';

import { useSelector } from 'react-redux';
import { selectorLoading } from 'redux/auth/auth-selectors';
import { selectorError } from 'redux/auth/auth-selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LogIn = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();
  const error = useSelector(selectorError);
  const loading = useSelector(selectorLoading);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(state);
    setState({ ...INITIAL_STATE });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = state => {
    dispatch(login(state));

    // if (error) {
    //   notify();
    // }
  };

  const { email, password } = state;

  const notify = () =>
    toast.error('Login error.Check your email and password and try again', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  useMemo(() => {
    if (error) {
      console.log('yes');
      return notify();
    }
    return console.log('no');
  }, [error]);

  return (
    <>
      {loading ? (
        <div className={styles.spiner}>
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div className={styles.box}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              className={styles.input}
              value={email}
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              className={styles.input}
              value={password}
              type="password"
              name="password"
              onChange={handleChange}
              required
            />

            <button type="submit" className={styles.btn}>
              Log In
            </button>
          </form>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default LogIn;
