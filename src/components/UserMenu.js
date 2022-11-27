import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { UserSuccessContext } from "../utils/UserSuccessContext";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import CardMovieFav from "../commons/CardMovieFav";

const UserMenu = () => {
  const userSuccess = useContext(UserSuccessContext);

  const [userSearch, setUserSearch] = useState("");
  const [findedUsers, setFindedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const handleSearchUser = (e) => {
    setUserSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://tmdb.up.railway.app/api/users/find/${userSearch}`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setFindedUsers(res.data);
      });
  };

  const userDetails = (userClickedId) => {
    const selectedUserIndex = findedUsers.findIndex(
      (user) => user.id === userClickedId
    );
    setSelectedUser(findedUsers[selectedUserIndex]);
  };

  return (
    <div className="bg-primary" variant="dark">
      <Container fluid>
        <Row className="text-center my-1 pt-4">
          <Col xs={2} className="text-light">
            <ul>
              <li>
                Name:{" "}
                {userSuccess.userSuccess.name ||
                  userSuccess.userSuccess.given_name}{" "}
                {userSuccess.userSuccess.lastname ||
                  userSuccess.userSuccess.family_name}
              </li>
              <li>
                Username:{" "}
                {userSuccess.userSuccess.username ||
                  userSuccess.userSuccess.email}
              </li>
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
      {findedUsers.length ? (
        <Container fluid>
          <Row>
            <Col className="text-light text-center" xs={3}>
              USERS' FINDER <hr />
              <Card className="my-4">
                <ListGroup variant="flush">
                  {findedUsers.map((user) => (
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
                {selectedUser.username ? (
                  <>
                    <Row md={5} className="m-2">
                      <div>Username: {selectedUser.username}</div>
                      <div>Email: {selectedUser.email}</div>
                    </Row>
                    <hr />
                    <Row md={1} className="m-2 display-5">
                      <div className="text-center">
                        {selectedUser.name}'s favorites
                      </div>
                    </Row>
                    <hr />

                    {selectedUser.favorites.length ? (
                      <Row md={5} className="m-2">
                        {selectedUser.favorites.map((movie) => {
                          return <CardMovieFav movie={movie} />;
                        })}
                      </Row>
                    ) : (
                      <>
                        <div className="display-7 text-center">
                          BORING USER HAS NO FAVORITES :(
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}

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
    </div>
  );
};

export default UserMenu;
