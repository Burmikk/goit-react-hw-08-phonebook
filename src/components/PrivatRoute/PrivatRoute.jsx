import { useSelector } from 'react-redux';
import { selectorLogin, selectorToken } from 'redux/auth/auth-selectors';
import { Outlet, Navigate } from 'react-router-dom';
import styles from './privat-route.module.scss';
const PrivatRoute = () => {
  const login = useSelector(selectorLogin);
  const token = useSelector(selectorToken);
  if (!login && !token) {
    return <Navigate to="/login" />;
  }
  if (!login && token) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return <Outlet />;
};
export default PrivatRoute;
