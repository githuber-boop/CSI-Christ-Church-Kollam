import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'; 
import conventionBg from '../assets/convention.webp'
import conventionCenter from '../assets/convention-center.webp'
import conventionInside from '../assets/convention-inside.webp'
import conventionInside2 from '../assets/convention-inside-2.webp'
import '../styles/ConventionCenter.css';


const ConventionCenter = () => {
  return (
    <>
        <PageBackgrounds backgroundImg={conventionBg} heroText={"CSI CONVENTION CENTER"}/>
        <div className="container">
        <div className="center-container">
            <div className="text-container">
                  <div className="flex-align">
                      <div class="line left-line"></div>
                      <div class="text-box">
                          PARISH HALL
                      </div>
                      <div class="line right-line"></div>
                  </div>
                </div>
        </div>

        <div className="parish-content">
            <div className="parish-text">
                <p>The Parish Hall, known as CSI Convention Centre is situated just
adjacent to the Cathedral. The spacious hall which is over 10,000 sq.feet,
is one of the major established halls in Kollam owing to its proximity to
the city center and easy accessibility from the railway station and bus
stand. The main air-conditioned hall at the first floor has a seating
capacity of around 500 and the dining hall at the ground floor can cater
to nearly 300 at a time. Spacious parking area and kitchen facility is
provided. The hall was constructed with the generous contributions
received from the Parish members and was dedicated on December 28 th ,
2005. The hall is rented out to the public at very affordable rates, so that
even the poor gets access to top-class facilities. The proceeds from the
hall are utilized for mission and charity work.</p>
            </div>

            <div className="parish-image-grid">
                <img src={conventionCenter} alt="conventionCenter" />
                <img src={conventionInside} alt="conventionInside" />
                <img src={conventionInside2} alt="conventionInside" />
            </div>
        </div>

        </div>
    </>
  );
}

export default ConventionCenter