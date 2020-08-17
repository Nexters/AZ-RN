const onlyLowercaseAndNumberValidator = (text: string) => {
  const regex = /^[a-z0-9]*$/g;
  return regex.test(text);
};

const passwordValidator = (text: string) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(text);
};

const exceptSpecialCaractor = (text: string) => {
  const regex = /^[a-z0-9ㄱ-힣]*$/g;
  return regex.test(text);
};

export default {
  onlyLowercaseAndNumberValidator,
  passwordValidator,
  exceptSpecialCaractor,
};
