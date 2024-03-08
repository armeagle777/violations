import axios from 'axios';

const serverApi = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export const login = async (credentials) => {
  // return await serverApi.post('/users/login', credentials);
  return await serverApi.post('/login', credentials);
};

export const getJkkViolations = async ({ countries, companies }) => {
  // const response = await serverApi.post('/tables/jkk', { countries, companies });
  const response = await serverApi.get('/violations', { countries, companies });

  return response.data;
};

export const getCountries = async () => {
  // const response = await serverApi.get('/tables/countries');
  const response = await serverApi.get('/countries');

  return response.data;
};

export const getCompanies = async () => {
  // const response = await serverApi.get('/tables/companies');
  const response = await serverApi.get('/companies');

  return response.data;
};

export const getFile = async ({ filterData }) => {
  const config = {
    responseType: 'blob',
  };

  const { data } = await serverApi.post('/export/excel', { data: filterData }, config);

  const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  return blob;
};

export default serverApi;
