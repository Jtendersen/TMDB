//lo utilizamos para generar los distintos pedidos axios a la api
//vamos a tratar de exportar el contexto y utilizarlo en los distintos componentes

import React, { useState, createContext } from "react";
export const MoviesContext = createContext({});

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
