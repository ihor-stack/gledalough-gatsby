import React, { createContext, useContext, useState, useEffect } from 'react';
import useOneTrustCheck from '../hooks/useOneTrustCheck';

const OneTrustContext = createContext();

const OneTrustProvider = ({ children }) => {
  const oneTrustAccepted = useOneTrustCheck();
  
  return (
    <OneTrustContext.Provider value={oneTrustAccepted}>
      {children}
    </OneTrustContext.Provider>
  );
};

const useOneTrust = () => {
  const oneTrustAccepted = useContext(OneTrustContext);

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  return mounted ? oneTrustAccepted : null;
};

export { OneTrustProvider, useOneTrust };