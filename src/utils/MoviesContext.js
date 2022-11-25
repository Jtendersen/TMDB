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
