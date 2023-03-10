import { NavLink } from 'react-router-dom';
import styles from './navBar-auth.module.scss';
const NavBarAuth = () => {
  return (
    <div className={styles.nav}>
      <NavLink to="register" className={styles.link}>
        Sign up
      </NavLink>
      <NavLink to="login" className={styles.link}>
        Log in
      </NavLink>
    </div>
  );
};

export default NavBarAuth;
