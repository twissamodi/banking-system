import axios from 'axios';
import { BACKEND_URL } from '../constants/apiEndpoints';

const makeRequest = async (apiEndpoint, dynamicConfig = {}) => {
  const details = await axios({
    ...apiEndpoint,
    url: `${BACKEND_URL}${apiEndpoint.url}`,
    data: {
      ...dynamicConfig,
    },
  });
  return details.data;
};

export default makeRequest;
