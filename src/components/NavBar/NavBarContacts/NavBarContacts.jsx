import { NavLink } from 'react-router-dom';
import styles from './nav-bar-contacts.module.scss';

const NavBarContacts = () => {
  return (
    <NavLink className={styles.link} to="contacts">
      PhoneBook
    </NavLink>
  );
};
export default NavBarContacts;
