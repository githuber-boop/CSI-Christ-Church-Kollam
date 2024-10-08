import React, { useState } from 'react'
import Hero from '../components/Hero'
import deanImage from '../assets/dean.webp'
import { useEffect } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import churchHistory from "../assets/church.png"
import Footer from '../components/Footer'
import roundedDean from '../assets/rounded-dean.png'
import roundedSecretary from '../assets/rounded-secretary.png'
import roundedAccountant from '../assets/rounded-accountant.png'
import CarouselComponenet from '../components/CarouselComponenet'
import SlideUpFadeIn from '../components/AnimationSlideup'
import Loading from '../components/Loading'
import axios from 'axios'

const App = () => {
    const [message, setMessage] = useState([]) 
    const [loading, setLoading] = useState(true);
    // const [AlmanacFileName, setAlmanacFileName] = useState(null);
    // const [HeraldFileName, setHeraldFileName] = useState(null);
    const [AlmanacFileUrl, setAlmanacFileUrl] = useState(null);
    const [HeraldFileUrl, setHeraldFileUrl] = useState(null);

    const fetchAlmanacPDFUrl = async () => {
      try {
        const response = await axios.get(`https://church-kollam-backend.onrender.com/files/almanac`);
        if (response.data.fileName) {
          setAlmanacFileUrl(`https://church-kollam-backend.onrender.com/download/almanac`);
          setAlmanacFileName(response.data.fileName)
        } else {
          setAlmanacFileName(null)
          setAlmanacFileUrl(null);
        }
      } catch (error) {
        console.error('Error fetching PDF file:', error);
      }
    };

    const fetchHeraldPDFUrl = async () => {
      try {
        const response = await axios.get(`https://church-kollam-backend.onrender.com/files/herald`);
        if (response.data.fileName) {
          setHeraldFileUrl(`https://church-kollam-backend.onrender.com/download/herald`);
          setHeraldFileName(response.data.fileName)
        } else {
          setHeraldFileName(null)
          setHeraldFileUrl(null);
        }
      } catch (error) {
        console.error('Error fetching PDF file:', error);
      }
    };
  
    useEffect(() => {
      fetchAlmanacPDFUrl();
      fetchHeraldPDFUrl();
    }, []);



    useEffect(() => {
        
        const fetchMessage = async () => {
          setLoading(true);
          try {
            const res = await fetch("https://church-kollam-backend.onrender.com/api/message", {
              headers: {
                'Cache-Control': 'no-store',
              },
            })
            const data = await res.json()
              setMessage(data)

          } catch (error) {
            console.error('Error fetching data:', error);
          }finally{
            setLoading(false)
          }
            
        }   

        fetchMessage()
    }, [])



  return (


      <>
        <Hero/>
        <div className="container">
        <section className="church-history">
                  <div className="marginCenter">
                    <div className="heading">
                      <h1>Our Church History</h1>
                    </div>
                  </div>
                  <div className="col-2 grid-column">
                    <div className="col-2-text">
                        <p>The CSI Christ Church, Kollam was adopted as the Cathedral of the  Diocese and was hence renamed as CSI Christ Church Cathedral. It is  situated in the heart of the Kollam town, besides the Kollam-Shenkottah  highway. This church was planted on Sunday 3rd September 1837 by Rev. J.  C. Thompson, the 3rd missionary of the London Missionary Society in  Quilon. ......</p>
                        <button className="button"><Link to='/church-history'>Read More</Link></button>
                    </div>
                    <div className="col-2-img">
                        <SlideUpFadeIn>
                        <img src={churchHistory} />
                        </SlideUpFadeIn>
                    </div>
                  </div>
        </section>
    </div>


        <div className="container vicarsMessage">
            <div className="marginRight">
                <div className="heading messageHeading">
                    <h1>VICAR'S MESSAGE</h1>
                </div>
            </div>
            <div className="title">

            </div>
            <div className="vicars-message">
                <div className="dean-image">
                <SlideUpFadeIn>
                    <img src={deanImage} alt="deanImage" />
                </SlideUpFadeIn>
                </div>

                <div className="message">
                {loading ? (
          <Loading /> // Show the spinner while loading
        ) : (
          message && message.length > 0 ? (
            message.map((partMessage, index) => (
              <div className="partMessage" key={index}>
                <h2>{new Date(partMessage.date).toLocaleDateString()}</h2>
                  <p>{partMessage.message.substring(0, 600) + '.................'}</p>
                  <button className="button"><Link to='/vicars-message'>Read More</Link></button>
              </div>
            ))
          ) : (
            <p>Reload the page</p> // Handle case with no data
          )
        )}
                {/* {message.map((partMessage, index) => (
                <div key={index} className="partMessage">
                  <h2>{partMessage.date}</h2>
                  <p>{partMessage.message.substring(0, 600) + '.................'}</p>
                  <button className="button"><Link to='/vicars-message'>Read More</Link></button>
                </div>
              ))} */}
                </div>
            </div>
        </div>

        <spline-viewer url="https://prod.spline.design/lpWEe4dZ544QvUrs/scene.splinecode"></spline-viewer>

        <div className="container officeBearers">
          <div className="flexCenter">
            <div className="heading">
              <h1>OFFICE BEARERS</h1>
            </div>
          </div>
          <SlideUpFadeIn>
          <div className="office-bearers-cards">
            

            <div className="bearer-card">
              <img src={roundedDean} alt="deanImage" />
              <div className="bearer-text">
                <h1 className='bearer-name'>REV. JOSE GEORGE</h1>
                <h3 className='bearer-position'>DEAN</h3>
                <p className='bearer-number'>+91 98464 66513</p>
              </div>
            </div>
            <div className="bearer-card">
              <img src={roundedSecretary} alt="deanImage" />
              <div className="bearer-text" >
                <h1 className='bearer-name'>Lal Thomas</h1>
                <h3 className='bearer-position'>Secretary</h3>
                <p className='bearer-number'>+91 94969 91960</p>
              </div>
            </div>
            <div className="bearer-card">
              <img src={roundedAccountant} alt="deanImage" />
              <div className="bearer-text">
                <h1 className='bearer-name'>Oommen Jacob</h1>
                <h3 className='bearer-position'>accountant</h3>
                <p className='bearer-number'>+91 94461 09231</p>
              </div>
            </div>
          </div>
          </SlideUpFadeIn>

        </div>

        <div className='container church-uploads'>

        <div className="flexCenter">
            <div className="heading">
              <h1>CHURCH PUBLICATIONS</h1>
            </div>
        </div>
        <SlideUpFadeIn>
          <div className="file-uploads">

          <a href={HeraldFileUrl} target='_blank'>
            <div className='upload herald'>
              <div class="card-content">
                <h1>CHURCH HERALD</h1>
              </div>
            </div>
          </a>

        
          <a href={AlmanacFileUrl}target='_blank'>
            <div className='upload' >
            <div class="card-content">
                <h1>CHURCH ALMANAC</h1>
              </div>
            </div>
          </a>

          </div>
        </SlideUpFadeIn>
        </div>

        <div className="gallery">
          <div className="flexCenter">
            <div className="heading">
              <h1>GALLERY</h1>
            </div>
          </div>
          <CarouselComponenet/>
          </div>

        <div className="container location">
          <div className="flexCenter">
            <div className="heading">
              <h1>Visit Us Here</h1>
            </div>
          </div>

          <div className="location-contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9139467430173!2d76.59111947436166!3d8.887592791187792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fc586740d3d1%3A0x746e561db8908230!2sCSI%20Christ%20Church%20Cathedral!5e0!3m2!1sen!2sin!4v1724148779697!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            <div className="contactUs">
                  <div className="number">
                  <i class="fa-solid fa-phone"></i>
                    <div className="number-details">
                      <h1>DEAN</h1>
                      <p>+91 98464 66513</p>
                    </div>
                  </div>
                  <div className="number">
                  <i class="fa-solid fa-envelope"></i>
                    <div className="number-details">
                      <h1>CHRIST CHURCH</h1>
                      <p>christchurchkollam@gmail.com</p>
                    </div>
                  </div>
                  <div className="number">
                  <i class="fa-solid fa-phone"></i>
                    <div className="number-details">
                      <h1>SECRETARY</h1>
                      <p>+91 94969 91960</p>
                    </div>
                  </div>
            </div>
          </div>
        </div>

        
        
        <Footer/>
      </>
    


  )
}

export default React.memo(App)