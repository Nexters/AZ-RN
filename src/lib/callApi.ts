import axios from 'axios';
import makeUrlOptions from './makeUrlOptions';

const callApi = async (config: any) => {
  const apiOption = makeUrlOptions(config);
  const res = await axios.request({
    ...apiOption,
  });

  const result = {
    status: res.status,
    ...res.data,
  };
  return result;
};

export default callApi;
