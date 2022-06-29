import CONFIG from './config';

const API_ENDPOINT = {
  LOCATION: `${CONFIG.BASE_URL}locations`,
  DETAIL: (id) => `${CONFIG.BASE_URL}details/${id - 1}`,
  COVID: `${CONFIG.BASE_COVID_URL}skor.json`,
};

export default API_ENDPOINT;
