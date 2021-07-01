import { useState } from 'react';

const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChangeValue = e => {
    setValue(e.target.value);
  };

  const clearValue = () => {
    setValue(defaultValue);
  };

  return [value, onChangeValue, clearValue];
};

export default useInput;
