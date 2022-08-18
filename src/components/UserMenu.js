import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { UserSuccessContext } from "../utils/UserSuccessContext";
import Form from "react-bootstrap/Form";
import axios from "axios";
import CardMovie from "../commons/CardMovie";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FavoritesContext } from "../utils/FavoritesContext";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const userSuccess = useContext(UserSuccessContext);
  const favorites = useContext(FavoritesContext);

  // const [movieData, setMovieData] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`/api/favorites/${userSuccess.userSuccess.username}`)
  //     .then((res) => {
  //       favorites.setFavorites(res.data);
  //     });
  // }, []);

  // const searchMovieFav = (tmdbId) => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=ef0f5ca3ae927c0b99427766940e8457&language=es-AR`
  //     )
  //     .then((res) => setMovieData(res.data));
  // };

  const handleSubmit = () => {};
  const handleSearchUser = () => {};

  return (
    <div className="bg-primary" variant="dark">
      <Container fluid>
        <Row className="text-center my-1 pt-4">
          <Col xs={2} className="text-light">
            <ul>
              <li>
                Name: {userSuccess.userSuccess.name}{" "}
                {userSuccess.userSuccess.lastname}
              </li>
              <li>Username: {userSuccess.userSuccess.username}</li>
            </ul>
          </Col>
          <Col className="display-4 text-light">USER MENU</Col>
          <Col xs={3}>
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                placeholder="Users' Search..."
                onChange={handleSearchUser}
              />
              <Form.Text className=" text-light">
                Let's see if this works...
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid>
        <Row>
          <Col className="text-light text-center" xs={3}>
            YOUR FAVORITE LIST <hr />
            <Card className="my-4">
              <ListGroup variant="flush">
                {/* {favorites.favorites.map((movie) => (
                  <ListGroup.Item
                    key={movie.tmdbId}
                    onClick={() => searchMovieFav(movie.tmdbId)}
                  >
                    {movie.movieTitle}
                  </ListGroup.Item>
                ))} */}
              </ListGroup>
            </Card>
          </Col>
          <Col className="text-center">
            <div className="bg-primary" variant="dark">
              <Row md={4} className="m-2 ">
                {/* {movieData.id ? <CardMovie {...movieData} /> : ""} */}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
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
        {userSuccess.userSuccess.username ? (
          <Nav.Item>
            <Nav.Link eventKey="/favorites" as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav.Item>
        ) : (
          ""
        )}
      </Nav>
    </div>
  );
};

export default UserMenu;
