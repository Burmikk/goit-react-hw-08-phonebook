import { useState } from 'react';
import styles from './sign-up.module.scss';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const SignUp = () => {
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
    dispatch(register(state));
  };

  const { name, email, password } = state;

  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} type="text" name="name" onChange={handleChange} />
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
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
