import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'
import missionsBg from '../assets/missions-projects-bg.webp'
import pyaridarChurch from '../assets/pyaridarChurch.webp'
import christHospitalhMission from '../assets/christ-hospital.webp'
import { Link } from 'react-router-dom'
import '../styles/Missions.css';
import LazyLoad from 'react-lazyload'


const Missions = () => {
  return (
    <>
        <PageBackgrounds backgroundImg={missionsBg} heroText={"MISSIONS AND PROJECTS"}/>

        <div className="container">
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
                    <h2>Chhattisgarh Mission</h2>
                    <p>In accordance with the Great Commission of our Lord, the  Kollam-Kottarakara Diocese decided to adopt a mission field under the  Jubilee Mission of the South Kerala Diocese</p>
                    <Link to="/chhattisgarh-mission" className='button'>Read More</Link>
                  </div>
                  <div className="mission-image">
                    <img src={pyaridarChurch} alt="chhattisgarh-image" />
                  </div>
                </div>
              </article>
              <article className="mission">
                <div className="mission-content">
                  <div className="mission-text">
                    <h2>christ mission hospital</h2>
                    <p>Christ Church Mission Hospital in Kollam is a well-known healthcare  facility offering a range of medical services. Established by the CSI  Church, it serves the community with essential health care and  treatments.</p>
                    <Link to="/christ-mission-hospital" className='button'>Read More</Link>
                  </div>
                  <div className="mission-image">
                    <img src={christHospitalhMission} alt="christ-church-hospital-image" />
                  </div>
                </div>
              </article>
            </div>
        </div>
    </>
  )
}

export default Missions