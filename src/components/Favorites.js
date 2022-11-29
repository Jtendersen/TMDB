import React, { useContext, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { UserSuccessContext } from "../utils/UserSuccessContext";
import { FavoritesContext } from "../utils/FavoritesContext";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CardMovieFav from "../commons/CardMovieFav";

const Favorites = () => {
  const userSuccess = useContext(UserSuccessContext);
  const favorites = useContext(FavoritesContext);

  const favoritesReal = favorites.favorites;

  useEffect(() => {
    axios
      .get(
        `https://tmdb.onrender.com/api/favorites/${userSuccess.userSuccess.username}`
        // { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        favorites.setFavorites(res.data);
      });
  }, []);

  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="/favorites"
        className="bg-dark"
        justify
      >
        <Nav.Item>
          <Nav.Link eventKey="/movies" as={Link} to="/movies">
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/tvshows" as={Link} to="/tvshows">
            TV Shows
          </Nav.Link>
        </Nav.Item>
        {userSuccess.userSuccess.username || userSuccess.userSuccess.email ? (
          <Nav.Item>
            <Nav.Link eventKey="/favorites" as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav.Item>
        ) : (
          ""
        )}
      </Nav>
      <div className="text-center my-2 display-4">THESE ARE YOUR FAVORITES</div>
      <Container className="bg-primary" fluid>
        <Row>
          <Col className="text-center">
            <div className="bg-primary" variant="dark">
              <Row xs={1} md={4} className="g-4 m-2 ">
                {favoritesReal &&
                  favoritesReal.map((movie) => {
                    return <CardMovieFav movie={movie} key={movie.id} />;
                  })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Favorites;
