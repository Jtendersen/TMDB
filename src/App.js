import React from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Movies from "./components/Movies";
import Navibar from "./components/Navibar";
import RegisterForm from "./components/RegisterForm";
import TvShows from "./components/TvShows";
import UserMenu from "./components/UserMenu";
import FavoritesContextProvider from "./utils/FavoritesContext";
import MoviesContextProvider from "./utils/MoviesContext";
import UserSuccessContextProvider from "./utils/UserSuccessContext";

const App = () => {
  return (
    <UserSuccessContextProvider>
      <MoviesContextProvider>
        <FavoritesContextProvider>
          <Navibar />

          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/user" element={<UserMenu />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </FavoritesContextProvider>
      </MoviesContextProvider>
    </UserSuccessContextProvider>
  );
};

export default App;
