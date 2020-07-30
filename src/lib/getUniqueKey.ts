import { v5 as uuidv5 } from 'uuid';

const getUniqueKey = (index: number) => {
  const uniqueKey = uuidv5(`${index}`, uuidv5.DNS);
  return uniqueKey;
};

export default getUniqueKey;
