import { useState } from 'react';

export const useLoading = (initialState = false) => {
  const [isLoaded, setIsLoaded] = useState(initialState);
  const completeLoading = () => setIsLoaded(() => true);

  return { isLoaded, completeLoading };
};
