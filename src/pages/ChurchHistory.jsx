import React from 'react'
import churchHistoryBG from '../assets/churchHistory.jpg'
import cathedralKollam from '../assets/cathedralKollam.png'
import churchPeople from '../assets/churchPeople.png'
import quilonMission from '../assets/quilonMission.png'
import cathedralColor from '../assets/cathedralColor.png'
import PageBackgrounds from '../components/PageBackgrounds'
import '../styles/ChurchHistory.css'
const ChurchHistory = () => {
  return (
    <>
      <PageBackgrounds backgroundImg={churchHistoryBG} heroText={"CHURCH HISTORY"}/>
    
      <div className="container">
          <div className="cathedral">
            <div className="heading">
                <h1>THE CATHEDRAL</h1>
            </div>

            <div className="cathedral-content">
                <p>The CSI Christ Church, Kollam was adopted as the Cathedral of the  Diocese and was hence renamed as CSI Christ Church Cathedral.It is  situated in the heart of the Kollam town, besides the Kollam-Shenkottah  highway.This church was planted on Sunday 3rd September 1837 by Rev. J.  C. Thompson, the 3rd missionary of the London Missionary Society in  Quilon. </p>

                <img src={cathedralKollam} alt="cathedral-Kollam" />
            </div>
            <div className="cathedral-content-alt cathedral-content">
                <img src={churchPeople} alt="cathedral-Kollam" />
                <p>The church building was dedicated and opened for worship on  Sunday 13th September 1910. As a memorial to the missionaries who  laboured in the Quilon district, the church was built mainly through the  efforts of Rev. W. J. Edmonds, missionary. The church edifice is a  landmark monument to the Diocese.CSI Christ Church, one of the oldest  and historically remarkable parishes in Kollam, has grown into a  full-fledged parish with 330 families witnessing the Lord in manifold  ways as part of its mission and striving to grow into a missionary  church. The parish completed 180 years in 2017.</p>

            </div>
          </div>

        <div className="quilon-mission">
            <div className="heading">
                <h1>QUILON MISSION</h1>
            </div>

            <div className="quilon-content">
                <p>The spiritual nourishment and social upliftment of the people in this  region are mainly because of the work done by the missionaries of the  London Missionary Society (LMS). The London Missionary Society, now the  Council for World Mission, commenced its work in South Travancore in  1806. The LMS set its boundaries of work in the areas of Southern  Travancore, between Karamanayaar in the South and Kalladayaar in the  North, while the Ceylon Missionary Society(CMS) was based in the Central  parts of Kerala and Bassel Mission on the Northern parts.William  Tobias Ringeltauble was the first LMS Missionary to come to Travancore</p>

                <img src={quilonMission} alt="cathedral-Kollam" />
            </div>

            <div className="quilon-content quilon-content-alt">
                <img src={cathedralColor} alt="cathedralColor" />
                <p>The LMS began its mission in Quilon in 1821, with Rev. John Smith. Rev.  William Crowe established the first Protestant place of worship in 1826.  In 1827, J.C. Thompson arrived, boosting the mission, and he, along  with his wife, started schools and a boarding home. Significant  contributions included a printing press (1835), a girls' boarding home  (1847), and many schools. Rev. Edmonds' leadership saw a revival from  1914-1919, increasing the number of Christians and schools. The London  Missionary Hospital in Kundara (1910) and other efforts established  Quilon as a center for social reform and upliftment.</p>

            </div>
        </div>

      </div>
    </>
  )
}

export default ChurchHistory