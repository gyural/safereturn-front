import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ImageSlide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/dummy/miss_thumbnail1.png`}
          alt={`Missing person`}
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/dummy/miss_thumbnail3.png`}
          alt={`Missing person`}
        />
        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ImageSlide