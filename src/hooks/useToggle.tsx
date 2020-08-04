import { useState } from 'react';

const useToggle = (initialValue: boolean, inputValidator: () => boolean) => {
  const [isAvailable, SetisAvailable] = useState(initialValue);
  const onToggle = () => {
    const willUpdate = inputValidator();
    SetisAvailable(willUpdate);
  };
  return {
    isAvailable,
    onToggle,
  };
};

export default useToggle;
