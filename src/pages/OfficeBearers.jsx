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
                        <h1>Name</h1>
                        <p>Position</p>
                        <p>Number</p>
                    </div>
                    <div className="office-bearer">
                        <img src={secretary} alt="" />
                        <h1>Name</h1>
                        <p>Position</p>
                        <p>Number</p>
                    </div>
                    <div className="office-bearer">
                        <img src={accountant} alt="" />
                        <h1>Name</h1>
                        <p>Position</p>
                        <p>Number</p>
                    </div>
                </div>
            </div>
            <div className="office-members group-container">
                <h1>Members</h1>
                <div className="office-group-grid">
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h1>Name</h1>
                        <p>Position</p>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h1>Name</h1>
                        <p>Position</p>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h1>Name</h1>
                        <p>Position</p>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h1>Name</h1>
                        <p>Position</p>
                    </div>
                    <div className="office-bearer">
                        <img src={profileImg} alt="" />
                        <h1>Name</h1>
                        <p>Position</p>
                    </div>
                </div>
            </div>
            <div className="office-ladies group-container">
                <div className="office-bearer">
                    <img src={profileImg} alt="" />
                    <h1>Name</h1>
                    <p>Position</p>
                </div>
                <div className="office-bearer">
                    <img src={profileImg} alt="" />
                    <h1>Name</h1>
                    <p>Position</p>
                </div>
            </div>
            <div className="office-youth group-container">
                <div className="office-bearer">
                    <img src={profileImg} alt="" />
                    <h1>Name</h1>
                    <p>Position</p>
                </div>
                <div className="office-bearer">
                    <img src={profileImg} alt="" />
                    <h1>Name</h1>
                    <p>Position</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OfficeBearers