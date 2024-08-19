import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'
import chhattisgarhMission from '../assets/chhattisgarh-mission.webp'
import '../styles/ChhattisgarhMission.css';
import missionQuarter from '../assets/mission-quarters.webp'
import visitors from '../assets/visitors.webp'
import pyaridar from '../assets/pyaridar.webp'
import nurserySchool from '../assets/nursery-school.webp'
import patewaSchool from '../assets/patewa.webp'
import LazyLoad from 'react-lazyload'
import Footer from '../components/Footer';



const ChhattisgarhMission = () => {
  return (
    <div>
        <PageBackgrounds backgroundImg={chhattisgarhMission} heroText={"CHHATTISGARH MISSION"}/>
    <div className="container">
            <div className="center">
                <p>In accordance with the Great Commission of our Lord, CSI Christ Church has committed to a mission field under the Jubilee Mission of the South Kerala Diocese in Patewa, Chhattisgarh State. This mission, originally initiated by the South Kerala Diocese and supported by our church since April 1st, 2007, is now supervised by the Board for Mission of the Kollam-Kottarakkara Diocese.</p>
            </div>

        <div className="missionHeadquarters">
            <div className="text-container ">
              <div className="flex-align">
                  <div className="line left-line"></div>
                  <div className="text-box">
                      MISSIONS HEADQUARTERS
                  </div>
                  <div className="line right-line"></div>
              </div>
            </div>

            <div className="headquarters-content missionContent">
                <div className="float-image">
                    <LazyLoad offset={8000}>
                    <img src={missionQuarter} alt="" />
                    </LazyLoad>
                </div>
                <p>The mission headquarters is located in Patewa, a small town along the Chhattisgarh-Odisha Highway. The one-and-a-half-acre land was generously donated by members of CSI Christ Church, Kollam. Presently, Bro. Justin and his family lead the mission, succeeding Rev. Thomas Cheriyan, who served for over seven years. Additional missionaries include three Malayali families and twelve local missionaries. The mission extends across Patewa, Khatta, Pyaridadar, Barnawapara, Dhamtari and Rajnandgaon.</p>
            </div>


        </div>

        <div className="patewaSchool">
            <div className="text-container right">
              <div className="flex-align">
                  <div className="line left-line"></div>
                  <div className="text-box">
                    Patewa Jubilee Mission School
                  </div>
                  <div className="line right-line"></div>
              </div>
            </div>

            <div className="patewaSchool-content missionContent">
                <div className=" floatRight">
                    <LazyLoad offset={8000}>
                    <img src={patewaSchool} alt="" />
                    </LazyLoad>
                </div>
                <p>The mission headquarters is located in Patewa, a small town along the Chhattisgarh-Odisha Highway. The one-and-a-half-acre land was generously donated by members of CSI Christ Church, Kollam. Presently, Bro. Justin and his family lead the mission, succeeding Rev. Thomas Cheriyan, who served for over seven years. Additional missionaries include three Malayali families and twelve local missionaries. The mission extends across Patewa, Khatta, Pyaridadar, Barnawapara, Dhamtari and Rajnandgaon.</p>
            </div>


        </div>

        <div className="khattaVillage">
            <div className="text-container">
              <div className="flex-align">
                  <div className="line left-line"></div>
                  <div className="text-box">
                    Khatta Village
                  </div>
                  <div className="line right-line"></div>
              </div>
            </div>

            <div className="khattaVillage-content missionContent">
                <div className="float-image">
                    <LazyLoad offset={8000}>
                    <img src={visitors} alt="" />
                    </LazyLoad>
                </div>
                <p>In Khatta village, the mission operated a Nursery School until recent political influence temporarily halted activities. Recognizing the missionaries' service, the local panchayat donated 20 cents of land for constructing the CSI Christ Church Centenary Commemorative School, which opened in 2009. A missionary family resides onsite, conducting house visits and prayer groups after school hours.</p>
            </div>


        </div>

        <div className="barnawapara">
            <div className="text-container right">
              <div className="flex-align">
                  <div className="line left-line"></div>
                  <div className="text-box">
                  Barnawapara Wildlife Reserve
                  </div>
                  <div className="line right-line"></div>
              </div>
            </div>

            <div className="barnawapara-content missionContent">
                <div className=" floatRight">
                    <LazyLoad offset={8000}>
                    <img src={nurserySchool} alt="" />
                    </LazyLoad>
                </div>
                <p>Located 12 kilometers from the nearest town, Barnawapara is a wildlife reserve lacking electricity and mobile connectivity. Despite these challenges, our missionaries established a nursery school in 2007, now expanded to Std. VII with nearly 150 students. The mission provides noon meals, often the only daily meal for these children. House visits and prayer meetings are integral to our missionaries' daily routine.</p>
            </div>


        </div>

        <div className="pyaridadar">
            <div className="text-container">
              <div className="flex-align">
                  <div className="line left-line"></div>
                  <div className="text-box">
                  Pyaridadar
                  </div>
                  <div className="line right-line"></div>
              </div>
            </div>

            <div className="pyaridadar-content missionContent">
                <p>In Khatta village, the mission operated a Nursery School until recent political influence temporarily halted activities. Recognizing the missionaries' service, the local panchayat donated 20 cents of land for constructing the CSI Christ Church Centenary Commemorative School, which opened in 2009. A missionary family resides onsite, conducting house visits and prayer groups after school hours.</p>
                <div className="block">
                    <LazyLoad offset={8000}>
                    <img src={pyaridar} alt="" className='pyaridar-img'/>
                    </LazyLoad>
                </div>
            </div>


        </div>

        <div className="center missionNeeds">
        <div className="text-container">
              <div className="flex-align">
                  <div className="line left-line"></div>
                  <div className="text-box">
                   Mission Needs
                  </div>
                  <div className="line right-line"></div>
              </div>
            </div>

                <p>The mission fields in forested areas face social, economic, educational, and cultural challenges, often neglected by authorities. Despite difficulties and opposition, our missionaries faithfully share the gospel, impacting families and communities. Regular Sunday worship and prayer meetings are held, fostering spiritual growth and community support.
Stepping into the mission field in Chhattisgarh marked a significant commitment for our Diocese, embodying the fulfillment of the Great Commission in our service and outreach efforts.
</p>
            </div>


        </div>

        <Footer/>
    </div>
  )
}

export default ChhattisgarhMission