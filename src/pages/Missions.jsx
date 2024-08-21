import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'
import missionsBg from '../assets/missions-projects-bg.webp'
import pyaridarChurch from '../assets/pyaridarChurch.webp'
import christHospitalhMission from '../assets/christ-hospital.webp'
import { Link } from 'react-router-dom'
import '../styles/Missions.css';
import LazyLoad from 'react-lazyload'
import balikamandiram from '../assets/balikamandiram.webp'
import Footer from '../components/Footer'
import Breadcrumb from '../components/BreadCrumbs'
import convention from '../assets/convention-inside.webp'

const Missions = () => {
  return (
    <>
        <PageBackgrounds backgroundImg={missionsBg} heroText={"MISSIONS AND PROJECTS"}/>

        <div className="container">
        <Breadcrumb/>

            <div className="text-container">
              <div className="flex-align">
                  <div class="line left-line"></div>
                  <div class="text-box">
                      MISSIONS
                  </div>
                  <div class="line right-line"></div>
              </div>
            </div>

            <div className="missions">
              <article className="mission">
                <div className="mission-content">
                  <div className="mission-text">
                    <h2>Chhattisgarh Mission</h2>
                    <p>In accordance with the Great Commission of our Lord, the  Kollam-Kottarakara Diocese decided to adopt a mission field under the  Jubilee Mission of the South Kerala Diocese</p>
                    <Link to="/chhattisgarh-mission" className='button'>Read More</Link>
                  </div>
                  <div className="mission-image">
                  <LazyLoad offset={8000}>
                    <img src={pyaridarChurch} alt="chhattisgarh-image" />
                  </LazyLoad>
                  </div>
                </div>
              </article>
            </div>
        </div>
        <div className="container">
            <div className="text-container">
              <div className="flex-align">
                  <div class="line left-line"></div>
                  <div class="text-box">
                      PROJECTS
                  </div>
                  <div class="line right-line"></div>
              </div>
            </div>

            <div className="missions">
              <article className="mission">
                <div className="mission-content">
                  <div className="mission-text">
                    <h2>CSI Balikamandiram and Balabhavanam </h2>
                    <p>The home for the boys-Balabhavan and the home for the girls-Balikamandiram, which are situated at the right-hand and left-hand side of the Cathedral, depicts the two extended arms of the Church, which accommodates..</p>
                    <Link to="/balikamandhiram-balabhavan" className='button'>Read More</Link>
                  </div>
                  <div className="mission-image">
                    <img src={balikamandiram} alt="chhattisgarh-image" />
                  </div>
                </div>
              </article>
              <article className="mission">
                <div className="mission-content">
                  <div className="mission-text">
                    <h2>CSI Convention Center </h2>
                    <p>The home for the boys-Balabhavan and the home for the girls-Balikamandiram, which are situated at the right-hand and left-hand side of the Cathedral, depicts the two extended arms of the Church, which accommodates..</p>
                    <Link to="/balikamandhiram-balabhavan" className='button'>Read More</Link>
                  </div>
                  <div className="mission-image">
                    <img src={convention} alt="chhattisgarh-image" />
                  </div>
                </div>
              </article>

            </div>
        </div>
      <Footer/>
    </>
  )
}

export default Missions