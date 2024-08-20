import React from 'react';
import PageBackgrounds from '../components/PageBackgrounds';
import '../styles/PastVicars.css';
import pastVicars from '../assets/past-vicars.webp'
import Footer from '../components/Footer';
import Breadcrumb from '../components/BreadCrumbs';


const vicarsData = [
  { name: "The Late Rev. K. Philipose", years: "1918-1919" },
  { name: "The Late Rev. M. Daniel", years: "1919-1936" },
  { name: "The Late Very Rev. K.P. Philip", years: "1936-1955" },
  { name: "The Late Rev.A.S. Samuel", years: "1955-1957" },
  { name: "The Late Very Rev. K.P. Philip", years: "1957-1960" },
  { name: "The Late Rev. IsaacS. David", years: "1961-1967" },
  { name: "The Late Very Rev. K.P. Philip", years: "1967-1975" },
  { name: "The Rev. Philip David", years: "1975-1980" },
  { name: "The Late Rev. IsaacS. David", years: "1980" },
  { name: "The Rev.Thomas David (Jr)", years: "1980-1984" },
  { name: "The Rev. J.D. Solomon", years: "1984-1986" },
  { name: "The Rev. S. Israel", years: "1986-1991" },
  { name: "The Rev. K.G. Varghese", years: "1991-1996" },
  { name: "The Late Rev. D. Jesudas", years: "1996-1998" },
  { name: "The Rev. Ben Gladstone", years: "1998-1999" },
  { name: "The Rev. Shalom Prakash", years: "1999-2000" },
  { name: "The Rev. D.C. Holy Garland", years: "2000-2005" },
  { name: "The Rev. Israel Thomas", years: "2005-2010" }
];

const PastVicars = () => {
  return (
    <>
        <PageBackgrounds backgroundImg={pastVicars} heroText={"PREVIOUS VICARS"}/>

        <div className="container center-container">
          <Breadcrumb/>
            <table className='table-container'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Years</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vicarsData.map((vicar, index) => (
                      <tr key={index}>
                        <td>{vicar.name}</td>
                        <td>{vicar.years}</td>
                      </tr>
                    ))}
                  </tbody>
            </table>
        </div>
        <Footer/>
    </>

    
  );
};

export default PastVicars;
