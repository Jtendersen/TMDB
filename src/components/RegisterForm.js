import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "username") {
      setUsername(value);
    }
    if (name === "firstName") {
      setFirstName(value);
    }
    if (name === "lastName") {
      setLastName(value);
    }
    if (name === "password") {
      setPass(value);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    axios
      .post(
        "https://tmdb.onrender.com/api/users",
        {
          email,
          username,
          name: firstName,
          lastname: lastName,
          password: pass,
        }
        // { withCredentials: true, credentials: "include" }
      )
      .then(() => handleClose())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="email"
                value={email}
                name="email"
                placeholder="example@domain.com"
                required
                autoFocus
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter a valid e-mail address
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Choose a username"
                value={username}
                name="username"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid username. Be creative!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                value={firstName}
                name="firstName"
                placeholder="Your Name here..."
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please, don't you have a first name?
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                value={lastName}
                name="lastName"
                placeholder="Your Lastname here..."
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Don't you have a last name? Don't be shy!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="password"
                value={pass}
                name="password"
                placeholder="Type your password..."
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                No password? Come on!
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="primary">
              Register
            </Button>
          </>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterForm;
