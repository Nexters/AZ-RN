import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export type InputBindType = {
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  text: string;
};
export type UseHandleInputType = {
  bind: InputBindType;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const useHandleInput = (
  initialValue: string,
  inputValidator?: (text: string) => boolean,
): UseHandleInputType => {
  const [text, setText] = useState(initialValue);
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const {
      nativeEvent: { text },
    } = e;
    if (inputValidator) {
      const willUpdate = inputValidator(text);
      if (willUpdate) {
        setText(text);
      }
    } else {
      setText(text);
    }
  };
  return {
    bind: {
      text,
      onChange,
    },
    setText,
  };
};

export default useHandleInput;
