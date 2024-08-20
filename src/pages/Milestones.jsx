import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'
import milestonesBg from '../assets/milestones-bg.webp'
import '../styles/Milestones.css'
import Footer from '../components/Footer'
import Breadcrumb from '../components/BreadCrumbs'

const Milestones = () => {

  const milestones = [
    {
      period: '1795-1926',
      details: 'London Missionary Society Was Founded In England In 1795. LMS Mission In Quilon Commenced On 6th March 1821 By Rev. John Smith, Missionary Of The LMS. The First Protestant Place Of Worship In Quilon Was Dedicated In 1826.'
    },
    {
      period: '1837-1881',
      details: 'This Church Founded On 3rd September 1837 By Rev. J. C. Thompson, LMS Missionary, As A Congregational Church. Sunday School Work Commenced In 1846. YMCA Work Commenced In 1881.'
    },
    {
      period: '1900-1910',
      details: 'Youth Movement Was Organised In 1900. The Parish Came Under South India United Church On 25th July 1907. New Church Building, The L.M.S. Memorial Church Built By Rev. W. J. Edmonds, Missionary, And Dedicated On 13th September 1910. Sadhu Sundar Singh, The Saint And Apostle Of India Visited The Church In February, 1918. The Parish Was Elevated As A Pastorate On 7th November 1918.'
    },
    {
      period: '1933-1947',
      details: 'Church Choir Formed In 1933, Women\'s Fellowship And YWCA Work Commenced In 1936. Kerala Council Of Churches Was Inaugurated In This Church In 1940. The Parish Came Under The Church Of South India On 27th September 1947 As A Result Of The Union Of Missionary Churches In South India.'
    },
    {
      period: '2000-2011',
      details: 'Kollam Convention Series Recommenced In 2000. CSI Christ Church Parish Hall Was Dedicated On 28th December 2005. Chattagitam Mission Commenced On 1st April 2007. Centenary Celebrations Of The Church Building Was Held From 13th September 2009 To 13th September 2010. Almaya Fellowship Started In July 2011.'
    },
    {
      period: '2014-2017',
      details: 'Church Elevated As Cathedral On 09. 04. 2014. The Birth Of Kollam-Kottarakkara Diocese & Recognized As Christ Church Cathedral, Kollam. The First Bishop Of CSI Kollam - Kottarakkara Diocese Was Consecrated In The Cathedral On 10th September 2017.'
    }
  ];

  return (
    <div>
      <PageBackgrounds backgroundImg={milestonesBg} heroText={"MILESTONES"}/>
      <div className="container">
      <Breadcrumb/>

          <div className="milestones">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone">
            <h2>{milestone.period}</h2>
            <p>{milestone.details}</p>
          </div>
          
        ))}
      </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Milestones