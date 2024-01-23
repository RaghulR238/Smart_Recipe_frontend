// Create a file, e.g., LoginDataContext.js

import { createContext, useContext, useState } from 'react';

const LoginDataContext = createContext();

export const useLoginData = () => {
  return useContext(LoginDataContext);
};

export const LoginDataProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);

  const updateLoginData = (newData) => {
    setLoginData(newData);
  };

  return (
    <LoginDataContext.Provider value={{ loginData, updateLoginData }}>
      {children}
    </LoginDataContext.Provider>
  );
};
