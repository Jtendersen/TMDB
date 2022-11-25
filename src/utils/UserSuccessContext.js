import React, { useState, createContext } from "react";
export const UserSuccessContext = createContext({});

const UserSuccessContextProvider = ({ children }) => {
  const [userSuccess, setUserSuccess] = useState({});

  return (
    <UserSuccessContext.Provider value={{ userSuccess, setUserSuccess }}>
      {children}
    </UserSuccessContext.Provider>
  );
};

export default UserSuccessContextProvider;
