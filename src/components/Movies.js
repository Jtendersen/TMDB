import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MoviesContext } from "../utils/MoviesContext";
import Row from "react-bootstrap/Row";
import CardMovie from "../commons/CardMovie";
import Nav from "react-bootstrap/Nav";
import { UserSuccessContext } from "../utils/UserSuccessContext";
import { Link } from "react-router-dom";

const Movies = () => {
  const userSuccess = useContext(UserSuccessContext);
  const movies = useContext(MoviesContext);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=ef0f5ca3ae927c0b99427766940e8457&language=es-AR"
      )
      .then((res) => {
        console.log("THESE ARE THE MUVIS!!", res.data.results);
        movies.setMovies(res.data.results);
      });
  }, []);
  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="/movies"
        className="bg-dark"
        justify
      >
        <Nav.Item>
          <Nav.Link eventKey="/movies" as={Link} to="/movies">
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tvshows" as={Link} to="/tvshows">
            TV Shows
          </Nav.Link>
        </Nav.Item>
        {userSuccess.userSuccess.username ? (
          <Nav.Item>
            <Nav.Link eventKey="favorites" as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav.Item>
        ) : (
          ""
        )}
      </Nav>
      <div className="text-center my-2 display-4">
        TRENDING MOVIES THIS WEEK
      </div>
      <div className="bg-primary" variant="dark">
        <Row xs={1} md={4} className="g-4 m-2">
          {movies.movies.map((movie) => (
            <CardMovie key={movie.id} {...movie} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Movies;
