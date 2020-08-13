import axios from 'axios';
import makeUrlOptions from './makeUrlOptions';

interface Response {
  error: string;
}

const callApi = async (config: any) => {
  //   const accessToken = localStorage.getItem("at");

  const apiOption = makeUrlOptions(config);
  try {
    const res = await axios.request({
      ...apiOption,
    });
    const result = {
      status: res.status,
      data: res.data,
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
