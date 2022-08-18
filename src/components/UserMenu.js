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
import { Button } from "react-bootstrap";
import CardMovieFav from "../commons/CardMovieFav";

const UserMenu = () => {
  const userSuccess = useContext(UserSuccessContext);

  const [userSearch, setUserSearch] = useState("");
  const [findedUser, setFindedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

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

  const handleSearchUser = (e) => {
    setUserSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/users/find/${userSearch}`).then((res) => {
      console.log("ESTA ES LA RESPONSE DEL USER FIND...", res.data);
      setFindedUsers(res.data);
    });
  };

  const userDetails = (userClickedId) => {
    console.log("este es el id de usuario", userClickedId);
    const selectedUserIndex = findedUser.findIndex(
      (user) => user.id === userClickedId
    );
    setSelectedUser(findedUser[selectedUserIndex]);
  };

  console.log("este es el usuario clickeado con todos sus datos", selectedUser);

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
            USERS' FINDER <hr />
            <Card className="my-4">
              <ListGroup variant="flush">
                {findedUser.map((user) => (
                  <ListGroup.Item
                    key={user.id}
                    onClick={() => {
                      userDetails(user.id);
                    }}
                    eventKey={user.id}
                  >
                    {user.name} {user.lastname}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col className="text-justify text-light">
            <div className="bg-primary" variant="dark">
              <Row md={3} className="m-2">
                <div>Username: {selectedUser.username}</div>
                <div>Register Email: {selectedUser.email}</div>
                <div className="text-center">
                  <Button className="" variant="light">
                    See {selectedUser.name}'s favorites
                  </Button>
                </div>
              </Row>
              <Row md={3} className="m-2">
                {selectedUser.favorites &&
                  selectedUser.favorites.map((movie) => {
                    return <CardMovieFav movie={movie} />;
                  })}

                {/* {
                    selectedUser.favorites[0]?(selectedUser.favorites.map((movie)=>{
                      return <CardMovieFav movie={movie} />;
                    })):<div>EL USUARIO ES AMARGO Y NO TIENE FAVORITOS<div/>
                  } */}
              </Row>

              {/* {movieData.id ? <CardMovie {...movieData} /> : ""} */}
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
