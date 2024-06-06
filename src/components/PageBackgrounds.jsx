import React from 'react'
import Navbar from './Navbar'
import '../assets/milestones-bg.png'


const PageBackgrounds = ({backgroundImg, heroText}) => {
  return (
    <div className="image-container App-header"   
    style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'50vh'
      }}
    >
        <div className='container'>
            <Navbar/>
            <div className="hero-text">
              <h1>{heroText}</h1>
            </div>
        </div>
    </div>
  )
}

export default PageBackgrounds