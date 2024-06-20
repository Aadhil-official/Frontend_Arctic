import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tempdata, setTempdata] = useState(() => {
    const storedData = sessionStorage.getItem('tempdata');
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    if (tempdata) {
      sessionStorage.setItem('tempdata', JSON.stringify(tempdata));
    } else {
      sessionStorage.removeItem('tempdata');
    }
  }, [tempdata]);

  return (
    <UserContext.Provider value={{ tempdata, setTempdata }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);