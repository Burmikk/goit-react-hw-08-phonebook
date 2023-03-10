import { useEffect } from 'react';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import styles from './contactPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { RotatingLines } from 'react-loader-spinner';
import { selectorLoading } from 'redux/auth/auth-selectors';

const ContactPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const loadingAuth = useSelector(selectorLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loadingAuth ? (
        <div className={styles.spiner_auth}>
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div>
          {error ? (
            <p className={styles.error}>
              Something went wrong. Try again later.{' '}
            </p>
          ) : (
            <div className={styles.wrapper}>
              <h1 className={styles.title}>Phonebook</h1>
              <ContactForm />
              <div className={styles.spiner_box}>
                <h2 className={styles.title}>Contacts</h2>
                {isLoading && (
                  <div className={styles.spiner}>
                    <RotatingLines
                      strokeColor="black"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}
                    />
                  </div>
                )}
              </div>
              <Filter />
              {contacts.length !== 0 && <ContactList />}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ContactPage;
