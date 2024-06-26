import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'
import chhattisgarhMission from '../assets/chhattisgarh-mission.png'
import '../styles/ChhattisgarhMission.css';
import missionQuarter from '../assets/mission-quarters.png'
import visitors from '../assets/visitors.jpg'
import patewaSchool from '../assets/patewa.png'
import LazyLoad from 'react-lazyload'



const ChhattisgarhMission = () => {
  return (
    <div>
        <PageBackgrounds backgroundImg={chhattisgarhMission} heroText={"CHHATTISGARH MISSION"}/>
    <div className="container">
            <div className="center">
                <p>In accordance with the Great Commission of our Lord, the  Kollam-Kottarakara Diocese decided to adopt a mission field under the  Jubilee Mission of the South Kerala Diocese at Pattewa in Chattisgarh  State. This mission field, started by the South Kerala Diocese, was  supported mainly by the CSI Christ Church from 1st of April 2007.</p>
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
                <div className="float-image floatRight">
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
                <div className="float-image">
                    <LazyLoad offset={8000}>
                    <img src={visitors} alt="" />
                    </LazyLoad>
                </div>
                <p>Located 12 kilometers from the nearest town, Barnawapara is a wildlife reserve lacking electricity and mobile connectivity. Despite these challenges, our missionaries established a nursery school in 2007, now expanded to Std. VII with nearly 150 students. The mission provides noon meals, often the only daily meal for these children. House visits and prayer meetings are integral to our missionaries' daily routine.</p>
            </div>


        </div>


        </div>
    </div>
  )
}

export default ChhattisgarhMission