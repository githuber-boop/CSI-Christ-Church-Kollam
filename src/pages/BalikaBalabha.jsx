import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'; 
import BalikaBhavanBg from '../assets/BalikaBhavanBg.png'
import '../styles/BalikaBalabha.css';
import balikamandiram from '../assets/balikamandiram.jpg'
import balabhavan from '../assets/balabhavan.jpg'
import childrenBalikamandiram from '../assets/children-balikamandiram.jpg'
import childrenBalabhavan from '../assets/children-balabhavan.jpg'


const BalikaBalabha = () => {
  return (
    <>
        <PageBackgrounds backgroundImg={BalikaBhavanBg} heroText={"BALIKAMANDIRAM AND BALABHAVAN"}/>
        <div className="container">
        <div className="center-container">
            <div className="text-container">
                  <div className="flex-align">
                      <div class="line left-line"></div>
                      <div class="text-box">
                          CSI BALIKAMANDHIRAM AND BALABHAVAN
                      </div>
                      <div class="line right-line"></div>
                  </div>
                </div>
        </div>

        <div className="balibha-hostels">
            <p className='desc-text'>The home for the boys-Balabhavan and the home for the girls-Balikamandiram, which are situated at the right-hand and left-hand side of the Cathedral, depicts the two extended arms of the Church, which accommodates, cares and nurtures the children who are deprived of good education and health, both physically and spiritually. These homes were formerly known as KNH homes, named after the German organisation Kindernothlife”, which means “helping the needy children”. These homes came into existence in 1971-’72 and was run till more than a decade back with their support.


            </p>

            <div className="hostels-grid_imgs">
                <img src={balikamandiram} alt="balikamandhiram hostel" />
                <img src={balabhavan} alt="balabhavan hostel" />
            </div>
        </div>

        <div className="balibha-children">
            <p className='desc-text'>

At present, these homes are managed by the Kollam-Kottarakara
Diocese and is funded mainly the generous contributions from the Cathedral
members.
School education, mental and physical grooming and character molding of
around fifty children from age six to fifteen ( Std.1 to X ) are being made
possible through this noble work. The Cathedral is much lauded by the society
for their generosity, and it is inspired by the verse : “ Whatever you did for one
of the least of my brethren’s, you did for me ”


            </p>

            <div className="children-grid_imgs">
                <img src={childrenBalikamandiram} alt="balikamandhiram hostel children" />
                <img src={childrenBalabhavan} alt="balabhavan hostel children" />
            </div>
        </div>

    </div>
    </>
  );
}

export default BalikaBalabha