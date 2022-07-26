import React, { useEffect } from "react";
import { searchMovie,fetchSearchImages } from "../Action/searchAction";
import { useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Search = () => {
  const dispatch = useDispatch();
    const [searchText, setSearchText] = React.useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchMovie(searchText));
  };
  useEffect(()=>{

},[searchText])
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearchImages(searchText));
    }
  return (
    <Form className="form" onSubmit={handleSubmit}>
        
      <Row className="row-seach">
        <Col sm={8}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col sm={2} className="col-center">
          
          <Button variant="primary" type="submit" className="btn-search">
            Submit
          </Button>
        
          
        </Col>
      </Row>
      
    </Form>
  );
};

export default Search;
