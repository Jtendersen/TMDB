import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { UserSuccessContext } from "../utils/UserSuccessContext";
import CardMovie from "../commons/CardMovie";
import { FavoritesContext } from "../utils/FavoritesContext";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardMovieFav from "../commons/CardMovieFav";

const Favorites = () => {
  const userSuccess = useContext(UserSuccessContext);
  const favorites = useContext(FavoritesContext);

  const favoritesReal = favorites.favorites;

  const [movieData, setMovieData] = useState({});

  /*
  const usernames = ['midudev', 'd4nidev', 'codingwithdani']

const favoritesMovies = await Promise.all(
  favorites.favorites.map(async (favMovie) => {
    return await fetchPostsFromTwitter(username)
  })
)

console.log(posts)
*/
  useEffect(() => {
    axios
      .get(`/api/favorites/${userSuccess.userSuccess.username}`)
      .then((res) => {
        console.log("ESTA ES LA DATA DEL FRONT...FAVS", res.data);
        favorites.setFavorites(res.data);
      });
  }, []);

  console.log("ESTO SON LOS FAVORITES GLOBALES", favorites.favorites);

  // const searchMovieFav = (tmdbId) => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=ef0f5ca3ae927c0b99427766940e8457&language=es-AR`
  //     )
  //     .then((res) => {
  //       setMovieData(res.data);
  //     });
  // };

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
      <div className="text-center my-2 display-4">THESE ARE YOUR FAVORITES</div>
      <Container className="bg-primary" fluid>
        <Row>
          {/* <Col className="text-light text-center bg-primary" xs={3}>
            <Card className="my-4">
              <ListGroup variant="flush">
                {favorites.favorites.map((movie) => (
                  <ListGroup.Item
                    key={movie.tmdbId}
                    onClick={() => searchMovieFav(movie.tmdbId)}
                  >
                    {movie.movieTitle}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col> */}
          <Col className="text-center">
            <div className="bg-primary" variant="dark">
              <Row md={4} className="m-2 ">
                {favoritesReal &&
                  favoritesReal.map((movie) => {
                    return <CardMovieFav movie={movie} />;
                  })}

                {/* {movieData.id ? <CardMovie {...movieData} /> : ""} */}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Favorites;
