// import axios from 'axios';
import { authInstance } from './authApi';

// const contactInstance = axios.create({
//   baseURL: 'https://640739b377c1a905a0f22512.mockapi.io/contacts',
// });

export const getAllContacts = () => authInstance.get('/contacts');

export const addContact = data => {
  return authInstance.post('/contacts', data);
};

export const deleteContact = id => {
  return authInstance.delete(`/contacts/${id}`);
};
