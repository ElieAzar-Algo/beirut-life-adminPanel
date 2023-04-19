import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_URL;

export const ENDPOINTS = {
  PRODUCT: 'product',
  COVERAGE: 'coverage',
  AUTH: 'auth',
  CHANGEPWD: 'changepwd',
  LOGIN:'user/login',
};

export const createAPIEndpoint = (endpoint) => {
  let url = `${BASE_URL}/${endpoint}`;
  const accessTokne = localStorage.getItem("access-token")
  const options = { headers: { 'Content-Type': 'application/json', 'x-access-token':accessTokne } };

  return {
    changepwd: (pwd) => axios.post(url, pwd, options),
    auth: (email, password) => {
      const body = { email, password };
      return axios.post(url,body,options);
    },
    fetch: () => axios.get(url),
    fetchById: (id) => axios.get(url + '/' + id),
    post: (newRecord) => axios.post(url, newRecord, options),
    put: (id, updatedRecord) => axios.put(url + '/' + id, updatedRecord, options),
    delete: (id) => axios.delete(url + '/' + id),
  };
};
