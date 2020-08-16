const onlyLowercaseAndNumberValidator = (text: string) => {
  const regex = /^[a-z0-9]*$/g;
  return regex.test(text);
};

const passwordValidator = (text: string) => {
  const regex = /(?=.*d)(?=.*[a-z]).{8,}/;
  return regex.test(text);
};

export default { onlyLowercaseAndNumberValidator, passwordValidator };
