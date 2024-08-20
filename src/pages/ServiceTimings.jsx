import React from 'react';
import '../styles/ServiceTimings.css';
import PageBackgrounds from '../components/PageBackgrounds';
import serviceTiming from '../assets/service-timing.webp'
import Footer from '../components/Footer';
import Breadcrumbs from '../components/BreadCrumbs';


const worshipTimingsData = [
  { day: "1st 3rd & 5th Sundays", time: "08.00 am", description: "Malayalam Holy Communion Worship" },
  { day: "2nd & 4th Sundays", time: "06.30 am", description: "English Holy Communion Worship" },
  { day: "2nd & 4th Sundays", time: "08.00 am", description: "Malayalam Matins Worship" },
  { day: "Every Thursday", time: "05.30 pm", description: "Family Prayer" },
  { day: "Every Friday", time: "10.00 am", description: "Fasting Prayer" },
  { day: "Every Sunday", time: "10.00 am", description: "Sunday School at Cathedral" },
  { day: "Every Wednesday", time: "04.30 pm", description: "Women's Fellowship at Theodore Tilak Chapel Kadappakada" },
  { day: "2nd & 4th Sundays", time: "10.00 am", description: "Youth Fellowship at Cathedral" },
  { day: "4th Sundays", time: "10.00 am", description: "Almaya Fellowship at Prayer Hall" },
  { day: "Christmas", time: "06.00 am", description: "" },
  { day: "Maundy Thursday", time: "06.30 pm", description: "" },
  { day: "Good Friday", time: "09.00 am", description: "" },
  { day: "Easter", time: "06.00 am", description: "" }
];

const ServiceTimings = () => {
  return (
    <>
        <PageBackgrounds backgroundImg={serviceTiming} heroText={"SERVICE TIMINGS"}/>
    
        <div className="container center-container">
          <Breadcrumbs/>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {worshipTimingsData.map((timing, index) => (
                    <tr key={index}>
                      <td>{timing.day}</td>
                      <td>{timing.time}</td>
                      <td>{timing.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default ServiceTimings;
