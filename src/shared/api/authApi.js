import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const register = async value => {
  const { data } = await authInstance.post('/users/signup', value);
  setToken(data.token);
  return data;
};

export const login = async value => {
  const { data } = await authInstance.post('/users/login', value);
  setToken(data.token);
  return data;
};

export const logOut = async value => {
  const { data } = await authInstance.post('/users/logout', value);
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
