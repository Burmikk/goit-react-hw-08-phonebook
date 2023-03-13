import { useState, useMemo } from 'react';
import styles from './login.module.scss';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { RotatingLines } from 'react-loader-spinner';

import { useSelector } from 'react-redux';
import { selectorLoading, selectorError } from 'redux/auth/auth-selectors';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LogIn = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();

  const loading = useSelector(selectorLoading);
  const error = useSelector(selectorError);

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
  };

  const notify = () =>
    toast.error('Something went wrong, check your email and password', {
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
      return notify();
    }
  }, [error]);

  const { email, password } = state;

  return (
    <div>
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
          <button className={styles.btn}>Sign up</button>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default LogIn;
