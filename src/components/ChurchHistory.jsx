import React from 'react'
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import churchHistory from '"src\assets\church-history.png"'

const ChurchHistory = () => {
  return (
    
    <div className="container">
        <section className="church-history">
                  <div className="heading">
                    <h1>Our Church History</h1>
                  </div>
                  <div className="col-2 grid-column">
                    <div className="col-2-text">
                        <p>The CSI Christ Church, Kollam was adopted as the Cathedral of the  Diocese and was hence renamed as CSI Christ Church Cathedral. It is  situated in the heart of the Kollam town, besides the Kollam-Shenkottah  highway. This church was planted on Sunday 3rd September 1837 by Rev. J.  C. Thompson, the 3rd missionary of the London Missionary Society in  Quilon. ......</p>
                        <button className="button"><Link to='/church-history'>Read More</Link></button>
                    </div>
                    <div className="col-2-img">
                        <img src={churchHistory} />
                    </div>
                  </div>
        </section>
    </div>
  )
}

export default ChurchHistory