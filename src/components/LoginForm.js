import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { UserSuccessContext } from "../utils/UserSuccessContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoogleLoginComponent from "../commons/GoogleLoginComponent";

const LoginForm = () => {
  const userSuccess = useContext(UserSuccessContext);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPass(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/login",
        {
          username: username,
          password: pass,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => userSuccess.setUserSuccess(res.data))
      .then(() => handleClose())
      .then(() => {
        setPass("");
        setUsername("");
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/logout"
        // {
        //   withCredentials: true,
        //   credentials: "include",
        // }
      )
      .then(() => userSuccess.setUserSuccess({}));
    navigate("/");
  };

  const NotLogged = () => {
    return (
      <>
        <Button variant="outline-info" className="my-3" onClick={handleShow}>
          LOGIN
        </Button>
        <br />
        Not a User?
        <Link to="/register">REGISTER!</Link>
      </>
    );
  };

  const Logged = () => {
    return (
      <>
        <Button variant="outline-info" className="my-3" onClick={handleLogout}>
          LOGOUT
        </Button>
        <br />
        User Logged in as:{" "}
        <Link to="/user">
          {userSuccess.userSuccess.name} {userSuccess.userSuccess.lastname}
        </Link>
        {/* <a href="/user">
          
        </a>{" "}
        MAGIA! */}
      </>
    );
  };

  useEffect(() => {
    axios
      .get(
        "/api/users/me"
        // {
        //   withCredentials: true,
        //   credentials: "include",
        // }
      )
      .then((res) => res.data)
      .then((user) => {
        userSuccess.setUserSuccess(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {userSuccess.userSuccess.name ? <Logged /> : <NotLogged />}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                value={username}
                name="username"
                placeholder="Your Username..."
                required={true}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="password"
                placeholder="Your password..."
                value={pass}
                name="password"
                required={true}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {userSuccess.userSuccess.name ? (
            <>
              <span>Welcome {userSuccess.userSuccess.name} !!! </span>
              <Button variant="secondary" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* <GoogleLoginComponent /> */}
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={handleSubmit} variant="primary">
                Login
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginForm;
