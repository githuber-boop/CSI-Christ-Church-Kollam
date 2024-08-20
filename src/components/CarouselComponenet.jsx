// src/Carousel.js
import React, { useState } from 'react';
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselComponenet = () => {

  return (
    <>
        <Carousel>
                <div>
                    <img src="https://via.placeholder.com/900x500?text=Slide+1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/900x500?text=Slide+1" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/900x500?text=Slide+1" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </>
  );
};

export default CarouselComponenet;
