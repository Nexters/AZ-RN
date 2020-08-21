const arrayConditionCheck = <T>(array: Array<T>, checker: (item: T) => boolean) => {
  return array.every(checker);
};

export default arrayConditionCheck;
