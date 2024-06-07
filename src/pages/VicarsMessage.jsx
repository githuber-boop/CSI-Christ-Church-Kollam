import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'
import messageBg from '../assets/vicars-message-bg.png'
import bishopImage from '../assets/vicar-image.png'

const VicarsMessage = () => {
    const styles = {
        content: {
        maxWidth: '1200px',
         margin: 'auto',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.6',
          marginTop: '50px',
          padding:"30px"
        },
        image: {
          float: 'center',
          margin: '0 0  20px 20px',
        },
        text: {
          fontFamily: "IBM Plex Sans Condensed",
          fontSize:"20px",
          marginBottom:"10px"
        },
      };

  return (
      <div>
        <PageBackgrounds backgroundImg={messageBg} heroText={"VICAR'S MESSAGE"}/>
  
        <div style={styles.content}>
            <img src={bishopImage} alt="Bishop" style={styles.image} width="300" />
            <div>

                <h2 className='date'>6th of June 2024</h2>
                <p style={styles.text} >I am delighted to know that a commemorative volume will be  published in connection with the centenary celebrations of our church edifice.

On the occasion of the Jubilee, as the Bible teaches, we are called to thank God for all the blessings and guidance given to us and also to rededicate ourselves to walk with God and to participate in His mission.
Quilon has been blessed with a very strong missionary tradition. The missionaries underwent extremely difficult situations, mainly on account of their health. In spite of all the difficulties, God enabled them to give birth to a community that accepted Jesus Christ as Lord and Savior. The work of education and the proclamation of the Gospel were the main areas of their ministry. This transformed the total life of the society. Several of our fathers and mothers who had associated with them also rendered their service with commitment to the Church and society. We remember all of them with gratitude. We are proud of the Christian community connected to the Church of South India in Kollam, which has been giving witness as the 'people of God'.</p>
                <p style={styles.text} >I am delighted to know that a commemorative volume will be  published in connection with the centenary celebrations of our church edifice.

On the occasion of the Jubilee, as the Bible teaches, we are called to thank God for all the blessings and guidance given to us and also to rededicate ourselves to walk with God and to participate in His mission.
Quilon has been blessed with a very strong missionary tradition. The missionaries underwent extremely difficult situations, mainly on account of their health. In spite of all the difficulties, God enabled them to give birth to a community that accepted Jesus Christ as Lord and Savior. The work of education and the proclamation of the Gospel were the main areas of their ministry. This transformed the total life of the society. Several of our fathers and mothers who had associated with them also rendered their service with commitment to the Church and society. We remember all of them with gratitude. We are proud of the Christian community connected to the Church of South India in Kollam, which has been giving witness as the 'people of God'.</p>

                <div className="titles">
                  <h3>REV. JOSE GEORGE</h3>
                  <h4>DEAN</h4>
                </div>
            </div>
                
        </div>

    </div>


    
  )
}

export default VicarsMessage