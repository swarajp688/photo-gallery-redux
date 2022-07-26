import React, {  useState } from "react";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux/es/exports";

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Button from "react-bootstrap/Button";
const Images = () => {
  const [load, setLoad] = useState(8);
  const state = useSelector((state) => state);
  const {  images } = state;
  console.log(state.images.loading)
  if(state.images.loading){
    return <div className="loader">
      <Spinner animation="border" variant="primary" />
    </div>
  }
  const limitImages = images.images.slice(0,load);

  return (
    <div>
      <Container className="container">
        <>
        </>
        <div className="wrap">
          {limitImages.map((image,i) => (
            <div key={i} className="image-wrapper">
              <Image className="image" src={image.urls.small} />
            </div>
          ))}
        </div>
       
      </Container>
      <div className="center">
          <Button variant="primary" onClick={() => setLoad(load + 8)}>
            Load More
          </Button>
      </div>
    </div>
  );
};

export default Images;
