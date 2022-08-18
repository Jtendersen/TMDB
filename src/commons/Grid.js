import React, { useContext } from "react";
import { UserSuccessContext } from "../utils/UserSuccessContext";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Grid = () => {
  const userSuccess = useContext(UserSuccessContext);

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
    </>
  );
};

export default Grid;
