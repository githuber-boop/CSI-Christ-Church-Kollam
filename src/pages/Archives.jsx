import React from 'react'
import churchHistoryBG from '../assets/churchHistory.jpg'
import ArchiveCarousel from '../components/ArchiveCarousel.jsx'
import PageBackgrounds from '../components/PageBackgrounds.jsx'
const Archives = () => {
  return (
    <>
      <PageBackgrounds backgroundImg={churchHistoryBG} heroText={"ARCHIVES"}/>
      <div className="Carouselcontainer">
        <ArchiveCarousel/>
      </div>
    </>
  )
}

export default Archives