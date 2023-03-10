import NavBarAuth from 'components/NavBar/NavBarAuth/NavBarAuth';
import { useSelector } from 'react-redux';
import { selectorLogin } from 'redux/auth/auth-selectors';
import NavBarUser from './NavBarUser/NavBarUser';

export const NavBar = () => {
  const login = useSelector(selectorLogin);
  return (
    <div>
      {!login && <NavBarAuth />}
      {login && <NavBarUser />}
    </div>
  );
};

export default NavBar;
