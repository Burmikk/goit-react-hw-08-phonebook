import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectorLogin } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const login = useSelector(selectorLogin);
  if (login) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
export default PublicRoute;
