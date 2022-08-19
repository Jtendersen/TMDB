import React, { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { UserSuccessContext } from "../utils/UserSuccessContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleMinus,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";
import axios from "axios";

const CardMovie = ({
  title,
  poster_path,
  overview,
  original_title,
  release_date,
  vote_average,
  id,
}) => {
  const userSuccess = useContext(UserSuccessContext);

  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const [lgShow, setLgShow] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleClose = () => setLgShow(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add to Favorites
    </Tooltip>
  );

  const addToFavorites = () => {
    axios
      .post(`/api/favorites/add/${userSuccess.userSuccess.username}`, {
        movieTitle: title,
        tmdbId: id,
      })
      .then(() => console.log("Favorite was magicaly created"));
    setFavorite(!favorite);
  };

  const removeFromFavorites = () => {
    axios
      .delete(`/api/favorites/${userSuccess.userSuccess.username}`, {
        headers: {},
        data: {
          tmdbId: id,
        },
      })
      .then(() => console.log("Favorite was worderfully removed"));
    setFavorite(!favorite);
  };

  return (
    <div>
      <Col>
        <Card>
          <Card.Img
            className="img-fluid"
            variant="top"
            src={API_IMG + poster_path}
            onClick={() => setLgShow(true)}
          />
          <Card.Body>
            <Link to="#href">
              <Card.Title className="text-center">
                <Container>
                  <Row>
                    <Col onClick={() => setLgShow(true)}>{title}</Col>
                    {userSuccess.userSuccess.username ||
                    userSuccess.userSuccess.email ? (
                      <>
                        <hr />
                        <Col>
                          <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                          >
                            {favorite ? (
                              <FontAwesomeIcon
                                icon={faHeartCircleMinus}
                                onClick={removeFromFavorites}
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faHeartCirclePlus}
                                onClick={addToFavorites}
                              />
                            )}
                          </OverlayTrigger>
                        </Col>
                      </>
                    ) : (
                      ""
                    )}
                  </Row>
                </Container>
              </Card.Title>
            </Link>
          </Card.Body>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                {title}
                {"  "}
                {userSuccess.userSuccess.username ||
                userSuccess.userSuccess.email ? (
                  <>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      {favorite ? (
                        <FontAwesomeIcon
                          icon={faHeartCircleMinus}
                          onClick={removeFromFavorites}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faHeartCirclePlus}
                          onClick={addToFavorites}
                        />
                      )}
                    </OverlayTrigger>{" "}
                  </>
                ) : (
                  ""
                )}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container text-center">
                <img
                  src={API_IMG + poster_path}
                  alt="movieImg"
                  className="img-fluid"
                />
                <hr />
                <div className="text-center">
                  <p>
                    <u>
                      <strong>Overview</strong>
                    </u>
                  </p>
                  {overview}
                </div>
                <hr />
                <Container>
                  <Row>
                    <Col>Original Title: {original_title}</Col>
                  </Row>
                  <Row>
                    <Col>Release Date: {release_date}</Col>
                  </Row>
                  <Row>
                    <Col>Rating: {vote_average}</Col>
                  </Row>
                </Container>
                <hr />
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </Card>
      </Col>
    </div>
  );
};

export default CardMovie;
