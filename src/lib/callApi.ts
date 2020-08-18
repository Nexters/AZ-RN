import axios from 'axios';
import makeUrlOptions from './makeUrlOptions';

const callApi = async (config: any) => {
  const apiOption = makeUrlOptions(config);
  try {
    const res = await axios.request({
      ...apiOption,
    });
    const result = {
      status: res.status,
      ...res.data,
    };
    return result;
  } catch ({
    response: {
      status,
      data: { error },
    },
  }) {
    return {
      status,
      error,
    };
  }
};

export default callApi;
