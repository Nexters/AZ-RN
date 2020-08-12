const getUrlParams = (url?: string) => {
  const regexp = /(?::)(\D\w+)/gim;
  const params = url?.match(regexp);

  return params && params.length > 0
    ? params.map((match) => match.replace(':', ''))
    : [];
};

const makeRequestUrl = <
  U extends string,
  P extends string[],
  B extends { [key: string]: any }
>(
  url: U,
  params: P,
  body: B,
) => {
  const requestUrl = url;
  params.forEach((param) => {
    url.replace(`:${param}`, body[param]);
  });
  return requestUrl;
};

const deleteBodyParams = <P extends string[], B extends { [key: string]: any }>(
  params: P,
  reqBody: B,
) => {
  const body = reqBody;

  params.forEach((param) => {
    if (body[param]) delete body[param];
  });
  return body;
};

const makeUrlOptions = (config: { [key: string]: any }) => {
  const params = getUrlParams(config.url);
  const requestUrl = makeRequestUrl(config.url, params, config);
  const body = deleteBodyParams(params, config);

  return {
    url: requestUrl,
    method: config.method,
    ...(config.method === 'get' ? { params: body } : { data: body }),
  };
};

export default makeUrlOptions;
