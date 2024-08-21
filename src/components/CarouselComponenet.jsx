// src/Carousel.js
import React, { useState } from 'react';
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImage1 from '../assets/church-outside.png'
import carouselImage3 from '../assets/church-quilon.png'
import carouselImage4 from '../assets/church-old-comitee.png'
import carouselImage2 from '../assets/church-rainy.png'
import carouselImage5 from '../assets/church-old-parsonage.png'
import { useRef, useEffect } from 'react';
const CarouselComponenet = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const galleryRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsPlaying(true);
                } else {
                    setIsPlaying(false);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the gallery section is visible
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }
        };
    }, []);
  return (
    <>
        <div className="container">
        <div ref={galleryRef} >  
          <Carousel autoPlay={isPlaying}  // Start auto-playing only if isPlaying is true
                interval={4000}
                infiniteLoop
                showThumbs={true}
                showStatus={true}
                showArrows={true}
                stopOnHover={false}
                dynamicHeight ={true}>
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
        </div>
    </>
  );
};

export default CarouselComponenet;
