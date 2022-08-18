import React, { useContext, useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
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

const CardMovieFav = ({ movie }) => {
  const userSuccess = useContext(UserSuccessContext);

  const navigate = useNavigate();

  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const [lgShow, setLgShow] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const [title, setTitle] = useState("");
  const [poster_path, setPoster_path] = useState("");
  const [overview, setOverview] = useState("");
  const [original_title, setOriginal_title] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [vote_average, setVote_average] = useState("");
  const [id, setId] = useState("");

  const [remove, setRemove] = useState(false);

  useEffect(() => {}, [remove]);

  movie &&
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=ef0f5ca3ae927c0b99427766940e8457&language=es-AR`
      )
      .then((res) => {
        setTitle(res.data.title);
        setPoster_path(res.data.poster_path);
        setOverview(res.data.overview);
        setOriginal_title(res.data.original_title);
        setRelease_date(res.data.release_date);
        setVote_average(res.data.vote_average);
        setId(res.data.id);
      });

  const handleClose = () => setLgShow(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add to Favorites
    </Tooltip>
  );

  const removeFromFavorites = () => {
    axios
      .delete(`/api/favorites/${userSuccess.userSuccess.username}`, {
        headers: {},
        data: {
          tmdbId: id,
        },
      })
      .then(() => {
        remove === false ? setRemove(true) : setRemove(false);
        console.log("Favorite was worderfully removed");
        setFavorite(!favorite);
        navigate("/favorites");
      });
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
                    {userSuccess.userSuccess.username ? (
                      <>
                        <hr />
                        <Col>
                          <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                          >
                            <FontAwesomeIcon
                              icon={faHeartCircleMinus}
                              onClick={removeFromFavorites}
                            />
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
                {userSuccess.userSuccess.username ? (
                  <>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <FontAwesomeIcon
                        icon={faHeartCircleMinus}
                        onClick={removeFromFavorites}
                      />
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

export default CardMovieFav;
