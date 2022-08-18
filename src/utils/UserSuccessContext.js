//lo utilizamos para generar los distintos pedidos axios a la api
//vamos a tratar de exportar el contexto y utilizarlo en los distintos componentes

import React, { useState, createContext } from "react";
export const UserSuccessContext = createContext({});

const UserSuccessContextProvider = ({ children }) => {
  const [userSuccess, setUserSuccess] = useState([]);

  return (
    <UserSuccessContext.Provider value={{ userSuccess, setUserSuccess }}>
      {children}
    </UserSuccessContext.Provider>
  );
};

export default UserSuccessContextProvider;
