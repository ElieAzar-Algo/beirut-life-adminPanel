import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_URL;

export const ENDPOINTS = {
  PRODUCT: 'product',
  AUTH: 'auth',
  CHANGEPWD: 'changepwd',
};

export const createAPIEndpoint = (endpoint) => {
  let url = `${BASE_URL}/${endpoint}`;
  const options = { headers: { 'Content-Type': 'application/json' } };

  return {
    changepwd: (pwd) => axios.post(url, pwd, options),
    auth: (username, password) => {
      const params = { username, password };
      return axios.get(url, { params });
    },
    fetch: () => axios.get(url),
    fetchById: (id) => axios.get(url + '/' + id),
    post: (newRecord) => axios.post(url, newRecord, options),
    put: (id, updatedRecord) => axios.put(url + '/' + id, updatedRecord),
    delete: (id) => axios.delete(url + '/' + id),
  };
};
