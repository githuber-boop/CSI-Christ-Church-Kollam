// src/Carousel.js
import React, { useState } from 'react';
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImage1 from '../assets/LMS-mission-station.jpg'
import carouselImage2 from '../assets/missionary-kadeesha-church.jpg'
import carouselImage3 from '../assets/church-quilon.png'
import carouselImage4 from '../assets/church-old-comitee.png'
import carouselImage5 from '../assets/church-old-parsonage.png'
import carouselImage6 from '../assets/first-comitee.jpg'
import { useRef, useEffect } from 'react';
const ArchiveCarousel = () => {
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
                      {/* <p className="legend">The first LMS mission station in Quilon was at Mundakal</p> */}
                  </div>
                  <div>
                      <img src={carouselImage2} />
                      {/* <p className="legend">Rev. W.J. Edmonds, LMS Missionary in Quilon in front of Kadeesha Church, Quilon, with the Syrian priest.</p> */}
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
                  <div>
                      <img src={carouselImage6} />
                  </div>
   
          </Carousel>
        </div>
        </div>
    </>
  );
};

export default ArchiveCarousel;
