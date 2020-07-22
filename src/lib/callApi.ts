import axios from 'axios';

const callApi = async (config: any) => {
  //   const accessToken = localStorage.getItem("at");
  const res = await axios.request<any>({
    baseURL: `${window.location.origin}`,
    url: `${config.url}`,
    method: 'post',
    data: {
      method: config.url,
      ...config,
      //   accessToken,
    },
  });
  const result = res.data;
  return result;
};

export default callApi;
