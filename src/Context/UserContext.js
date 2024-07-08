import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tempdata, setTempdata] = useState(() => {
    const storedData = sessionStorage.getItem('tempdata');
    return storedData ? JSON.parse(storedData) : null;
  });

  const [tempdataGroup, setTempdataGroup] = useState(() => {
    const storedData = sessionStorage.getItem('tempdataGroup');
    return storedData ? JSON.parse(storedData) : null;
  });

  const [buttonData, setButtonData] = useState(() => {
    const storedData = sessionStorage.getItem('buttonData');
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    console.log("Updating sessionStorage with new context values");

    if (tempdata) {
      sessionStorage.setItem('tempdata', JSON.stringify(tempdata));
    } else {
      sessionStorage.removeItem('tempdata');
    }

    if (tempdataGroup) {
      sessionStorage.setItem('tempdataGroup', JSON.stringify(tempdataGroup));
    } else {
      sessionStorage.removeItem('tempdataGroup');
    }

    if (buttonData) {
      sessionStorage.setItem('buttonData', JSON.stringify(buttonData));
    } else {
      sessionStorage.removeItem('buttonData');
    }

    console.log('Session Storage Updated:', buttonData);
  }, [tempdataGroup, tempdata, buttonData]);

  return (
    <UserContext.Provider value={{ tempdata, setTempdata, tempdataGroup, setTempdataGroup, buttonData, setButtonData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
