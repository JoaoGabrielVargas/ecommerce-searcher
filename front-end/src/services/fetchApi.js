import axios from 'axios';

const fetchApi = async (category, query) => {
  const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${query}`);
  return data;
};

const fetchDescription = async (id) => {
  const { data } = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
  return data;
};

export { fetchApi, fetchDescription };
