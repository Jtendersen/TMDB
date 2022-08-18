import React, { useState, createContext } from "react";
export const FavoritesContext = createContext({});

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
