import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://640739b377c1a905a0f22512.mockapi.io/contacts',
});

export const getAllContacts = () => contactInstance.get('');

export const addContact = data => {
  return contactInstance.post('', data);
};

export const deleteContact = id => {
  return contactInstance.delete(`/${id}`);
};
