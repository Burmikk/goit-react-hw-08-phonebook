import { useState } from 'react';
import styles from './login.module.scss';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LogIn = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();

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

  const { email, password } = state;

  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          value={email}
          type="email"
          name="email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          value={password}
          type="password"
          name="password"
          onChange={handleChange}
        />

        <button>Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
