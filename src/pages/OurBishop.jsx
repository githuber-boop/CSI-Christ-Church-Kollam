import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'
import bishopBg from '../assets/bishop-bg.webp'
import LazyLoad from 'react-lazyload'
import VSFrancis from '../assets/bishop-francis.webp'
import OommenGeorge from '../assets/bishop-oomen.webp'
import Footer from '../components/Footer'
import Breadcrumb from '../components/BreadCrumbs'

const OurBishop = () => {
  return (
    <>
        <PageBackgrounds backgroundImg={bishopBg} heroText={"OUR BISHOP"}/>
        <div className="container">
          <Breadcrumb/>
          <div className="bishop-1">
            <div className="heading">
                  <h1>Rt.Rev. V.S.Francis</h1>
                  <p>bishop in charge</p>
            </div>
            
            <div className="col-2">
              <div className="col-2-text">
                <p>Rt.Rev. V. S. Francis is the fourth Bishop of East Kerala:<br></br> He has served since 2019. Francis was born in Ellumpuram on 18 May 1961. He was educated at the Union Biblical Seminary, Pune. He served congregations in Chemmannar, Kattappana, Konnathadi and Kaliyar. He was also Chaplain to Bishop George Daniel and Treasurer of the East Kerala Diocese of the Church of South India. He was consecrated of him at the CSI Cathedral Melukavu on 8 July 2019.</p>
              </div>
              <div className="col-2-img">
              <LazyLoad offset={8000}>
                        <img src={VSFrancis} />
              </LazyLoad>
              </div>
            </div>

          </div>
          <div className="bishop-2">
            <div className="heading">
                  <h1>Rt.Rev. Dr. Oommen George</h1>
                  <p>First Bishop of CSI Kollam-Kottarakara Diocese</p>
            </div>
            
            <div className="col-2">
              <div className="col-2-text">
                <p>Bishop Oommen George, born on July 21, 1956, in Maramon, dedicated his  life to ministry, influenced by his parents. Educated in engineering and  theology, he earned degrees from Mysore University and Kerala United  Theological Seminary. Ordained at Mulayakkunnu CSI Church, he served in  various parishes and held significant church committee roles. In the  USA, he was Vice-President of the Council of CSI Congregations and  earned a Doctor of Ministry. Consecrated as the first bishop of the CSI  Diocese of Kollam-Kottarakkara in 2017, he holds leadership positions,  including President of the Kerala Council of Churches and promotes  biblical messages via YouTube.</p>
              </div>
              <div className="col-2-img">
              <LazyLoad offset={5000}>
                        <img src={OommenGeorge} />
              </LazyLoad>
                    </div>
            </div>

          </div>
        </div>
        <Footer/>
    </>
  )
}

export default OurBishop