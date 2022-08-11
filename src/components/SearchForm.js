import React from "react";
import { Form } from "react-bootstrap";

const SearchForm = () => {
  return (
    <Form>
      <Form.Label>Searching</Form.Label>
      <Form.Control type="text" placeholder="Search movies here..." />
      <Form.Text className=" text-light">Tusam said this could fail</Form.Text>
    </Form>
  );
  //   <div>ACA VA LA BUSQUEDAAAAA</div>;
};

export default SearchForm;
