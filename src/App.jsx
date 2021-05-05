import React, { useState } from 'react';
import Lotto from './Lotto';

const App = () => {
  const [key, setKey] = useState(0);
  const handleReset = () => {
    setKey(key + 1);
  };

  return <Lotto key={key} onReset={handleReset} />;
};

export default App;
