import React from 'react'
import office from '../assets/office.jpg'
import PageBackgrounds from '../components/PageBackgrounds'
import profileImg from'../assets/profile-img.png'
import dean from'../assets/dean.png'
import secretary from'../assets/secretary.png'
import accountant from'../assets/accountant.png'
import '../styles/OfficeBearers.css';


const OfficeBearers = () => {
  return (
    <>
    <PageBackgrounds backgroundImg={office} heroText={"OFFICE BEARERS"}/>
    <div className="container">
        <div className="grid office-bearers">
            <div className="imp group-container">
                <div className="office-group">
                    <div className="office-bearer">
                        <img src={dean} alt="" />
                        <h3>Rev. Jose George</h3>
                        <p>Dean</p>
                        <p>9846466513</p>
                    </div>
                    <div className="office-bearer">
                        <img src={secretary} alt="" />
                        <h3>Lal Thomas</h3>
                        <p>Secretary</p>
                        <p>9496991960</p>
                    </div>
                    <div className="office-bearer">
                        <img src={accountant} alt="" />
                        <h3>Oommen Jacob</h3>
                        <p>Accountant</p>
                        <p>9446109231</p>
                    </div>
                </div>
            </div>


            <div className="office-members group-container">
                <h3 className='title'>Members</h3>
                <div className="office-group-flex">
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h3>Aneesh Thomson</h3>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h3>Finny V. Philip</h3>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h3>Adv. George Mathew</h3>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h3>Isaac Thomas</h3>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h3>Sunil Gabriel</h3>
                    </div>
                </div>
            </div>
            <div className="office-ladies group-container">
                <h3 className='title'>Lady Representatives</h3>
                <div className="office-group-flex">
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h3>Leela Thomas</h3>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h3>Shyla Solomon</h3>
                    </div>
                </div>
            </div>
            <div className="office-youth group-container">
                <h3 className='title'>Youth Representatives</h3>
                <div className="office-group-flex">
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h3>Dr. Sharan Elizabeth George</h3>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h3>Simi S.</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OfficeBearers