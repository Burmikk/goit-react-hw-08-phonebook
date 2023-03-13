import { useSelector } from 'react-redux';
import { selectorUser } from 'redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import styles from './navbar-user.module.scss';

const NavBarUser = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectorUser);
  return (
    <div className={styles.box}>
      <p className={styles.name}>{name}</p>
      <button className={styles.btn} onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default NavBarUser;
