import axios from 'axios';
import makeUrlOptions from './makeUrlOptions';

const callApi = async (config: any) => {
  //   const accessToken = localStorage.getItem("at");

  const apiOption = makeUrlOptions(config);
  console.log('apiOption', apiOption);
  const res = await axios.request<any>({
    ...apiOption,
  });
  const result = res.data;
  return result;
};

export default callApi;
