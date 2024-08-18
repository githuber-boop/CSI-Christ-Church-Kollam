import React from 'react'
import Navbar from './Navbar'
import '../assets/milestones-bg.webp'


const PageBackgrounds = ({backgroundImg, heroText}) => {
  return (
    <div className="image-container App-header"   
    style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
    }
    >
        <div className='container'>
            <Navbar/>
            <div className="hero-text">
              <h1 className='heroText'>{heroText}</h1>
            </div>
        </div>
    </div>
  )
}

export default PageBackgrounds