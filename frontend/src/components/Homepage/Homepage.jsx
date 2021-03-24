import React from 'react';
import MenuH from '../MenuH/MenuH';
import ButtonM from '../ButtonM/ButtonM';
import '../../css/style.css';

function Homepage() {
  return (
    <div>
      <MenuH />
      <div className="container">
        <div className="left-side">
          <p> VÁSÁRLÁSRÓL ÉS KISZÁLLITÁSRÓL</p>
          <p>TERMÉKEK LISTÁJA </p>
          <p>SZOLGÁLTATÁSOK </p>
          <p>KAPCSOLAT</p>
        </div> 

        <div className="right-side">
          <p>ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</p>
          <p> ADATKEZELÉSI NYILATKOZAT </p>
          <p> IMPRESSZUM</p>
        </div>
        <ButtonM />
      </div>
     
    </div>
  )
}

export default Homepage
