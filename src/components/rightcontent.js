import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from './img1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';
import I1 from './i1.jpg';
import I2 from './i2.jpg';
import I3 from './i3.jpg';
function Rightside() {
  return (  
    <Carousel data-bs-theme="dark" style={{  left:'0px', margin:'0px 10px 10px 10px', overflow: 'hidden' }} interval={1000}>
      <Carousel.Item>
        <img style={{ width: "100%", height: "auto"}}
          src={I1}
          alt="First slide"
        />
      
      {/* <CarouselCaption style={{fontSize:'50px',fontWeight:'bold',color:'black'}}>DELICIOUS & HEALTHY </CarouselCaption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "auto" }}
          src={I2}
          alt="Second slide"
        />
        {/* <CarouselCaption style={{fontSize:'50px',fontWeight:'bold',color:'red'}}>Chinese</CarouselCaption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "auto" }}
          src={I3}
          alt="Third slide"
        />
        {/* <CarouselCaption >Indian</CarouselCaption> */}
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Rightside;