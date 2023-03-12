import styles from './contactList.module.scss';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterSearch = () => {
    if (!filter) {
      return contacts;
    }
    const newContact = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return newContact;
  };

  const filteredContacts = filterSearch();

  const list = filteredContacts.map(({ id, name, number }) => (
    <ContactItem key={id} id={id} name={name} number={number} />
  ));

  return <ul className={styles.list}>{list}</ul>;
};

export default ContactList;
