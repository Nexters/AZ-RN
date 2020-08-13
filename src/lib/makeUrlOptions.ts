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
  let requestUrl = url as string;

  params.forEach((param) => {
    requestUrl = requestUrl.replace(`:${param}`, body[param]);
  });
  return requestUrl;
};

const deleteBodyParams = <P extends string[], B extends { [key: string]: any }>(
  params: P,
  reqBody: B,
) => {
  const body = reqBody;

  delete body['url'];
  delete body['method'];
  params.forEach((param) => {
    if (body[param]) delete body[param];
  });
  return body;
};

const makeUrlOptions = (config: { [key: string]: any }) => {
  const method = config.method;
  const params = getUrlParams(config.url);
  const url = makeRequestUrl(config.url, params, config);
  const body = deleteBodyParams(params, config);

  return {
    url,
    method,
    ...(config.method === 'get' ? { params: body } : { data: body }),
  };
};

export default makeUrlOptions;
