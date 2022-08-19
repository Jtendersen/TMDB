import axios from "axios";
import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { MoviesContext } from "../utils/MoviesContext";

const SearchForm = () => {
  const [searchWord, setSearchWord] = useState("");
  const movies = useContext(MoviesContext);

  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=ef0f5ca3ae927c0b99427766940e8457&language=es-AR&page=1&include_adult=false&query";

  const handleSearchWord = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${API_SEARCH}=${searchWord}`).then((res) => {
      movies.setMovies(res.data.results);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Searching</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search movies here..."
        onChange={handleSearchWord}
      />
      <Form.Text className=" text-light">Tusam said this could fail</Form.Text>
    </Form>
  );
};

export default SearchForm;
