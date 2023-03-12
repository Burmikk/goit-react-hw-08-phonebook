import NavBarAuth from 'components/NavBar/NavBarAuth/NavBarAuth';
import { useSelector } from 'react-redux';
import { selectorLogin, selectorToken } from 'redux/auth/auth-selectors';
import NavBarUser from './NavBarUser/NavBarUser';
import NavBarContacts from './NavBarContacts/NavBarContacts';
import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const login = useSelector(selectorLogin);
  const token = useSelector(selectorToken);

  return (
    <div className={styles.box}>
      <div>
        {login && <NavBarContacts />}

        <NavLink className={styles.link} to="/">
          About
        </NavLink>
      </div>

      {!login && !token && <NavBarAuth />}
      {login && <NavBarUser />}
    </div>
  );
};

export default NavBar;
