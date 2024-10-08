import React from 'react'
import office from '../assets/office.webp'
import PageBackgrounds from '../components/PageBackgrounds'
import roundedDean from '../assets/rounded-dean.png'
import roundedSecretary from '../assets/rounded-secretary.png'
import roundedAccountant from '../assets/rounded-accountant.png'
import '../styles/OfficeBearers.css';
import Footer from '../components/Footer'
import Breadcrumb from '../components/BreadCrumbs'


const OfficeBearers = () => {
  return (
    <>
    <PageBackgrounds backgroundImg={office} heroText={"OFFICE BEARERS"}/>
    <div className="container">
        <Breadcrumb/>
        <div className="grid office-bearers">
            <div className="imp group-container">
                 <h3 className='title'>OFFICE BEARERS</h3>

                <div className="office-group">
                    <div className="office-bearer">
                        <img src={roundedDean} alt="" />
                        <h3 className='bearer-name'>Rev. Jose George</h3>
                        <p>Dean</p>
                        <p>9846466513</p>
                    </div>
                    <div className="office-bearer">
                        <img src={roundedSecretary} alt="" />
                        <h3 className='bearer-name'>Lal Thomas</h3>
                        <p>Secretary</p>
                        <p>9496991960</p>
                    </div>
                    <div className="office-bearer">
                        <img src={roundedAccountant} alt="" />
                        <h3 className='bearer-name'>Oommen Jacob</h3>
                        <p>Accountant</p>
                        <p>9446109231</p>
                    </div>
                </div>
            </div>


            <div className="office-members group-container">
                <h3 className='title'>Members</h3>
                <div className="office-group-flex">
                    <div className="office-bearer">
                        <h3>Aneesh Thomson</h3>
                    </div>
                    <div className="office-bearer">
                        <h3>Finny V. Philip</h3>
                    </div>
                    <div className="office-bearer">
                        <h3>Adv. George Mathew</h3>
                    </div>
                    <div className="office-bearer">
                        <h3>Isaac Thomas</h3>
                    </div>
                    <div className="office-bearer">
                        <h3>Sunil Gabriel</h3>
                    </div>
                </div>
            </div>
            <div className="office-ladies group-container">
                <h3 className='title'>Lady Representatives</h3>
                <div className="office-group-flex">
                    <div className="office-bearer">
                        <h3>Leela Thomas</h3>
                    </div>
                    <div className="office-bearer">
                        <h3>Shyla Solomon</h3>
                    </div>
                </div>
            </div>
            <div className="office-youth group-container">
                <h3 className='title'>Youth Representatives</h3>
                <div className="office-group-flex">
                    <div className="office-bearer">
                        <h3>Dr. Sharan Elizabeth George</h3>
                    </div>
                    <div className="office-bearer">
                        <h3>Simi S.</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default OfficeBearers