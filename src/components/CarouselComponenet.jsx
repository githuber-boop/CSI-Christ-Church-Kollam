// src/Carousel.js
import React, { useState } from 'react';
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImage1 from '../assets/church-outside.png'
import carouselImage3 from '../assets/church-quilon.png'
import carouselImage4 from '../assets/church-old-comitee.png'
import carouselImage2 from '../assets/church-rainy.png'
import carouselImage5 from '../assets/church-old-parsonage.png'

const CarouselComponenet = () => {

  return (
    <>
        <div className="container">
          <Carousel className='rounded' >
                  <div>
                      <img src={carouselImage1} />
                  </div>
                  <div>
                      <img src={carouselImage2} />
                  </div>
                  <div>
                      <img src={carouselImage3} />
                  </div>
                  <div>
                      <img src={carouselImage4} />
                  </div>
                  <div>
                      <img src={carouselImage5} />
                  </div>
   
              </Carousel>
        </div>
    </>
  );
};

export default CarouselComponenet;
