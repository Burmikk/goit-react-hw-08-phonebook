import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { current } from '../../redux/auth/auth-operations';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return children;
};

AuthLayout.propTypes = {
  children: PropTypes.element,
};

export default AuthLayout;
