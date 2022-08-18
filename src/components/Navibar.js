import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

import SearchForm from "./SearchForm";
import LoginForm from "./LoginForm";

const Navibar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Col xs={3}>
          <Navbar.Brand href="/" className="justify-content-home">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
              alt="logoTMDB"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Col>
        <Col xs={6} className="px-5">
          <SearchForm />
        </Col>
        <Col xs={3}>
          <Navbar.Collapse className="justify-content-end text-center">
            <Navbar.Text>
              <LoginForm />
            </Navbar.Text>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Navibar;
