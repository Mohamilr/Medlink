import React from 'react';
import './infoDetails.css'
import {detailsBanner} from '../../asset/img/detailbanner.png';

const InfoDetails = () => {

  let facilityName = localStorage.getItem('facname__');
  let facilityAddress = localStorage.getItem('facadd__');

  return (
    <section className="details">
      
      <div className="details-main">
        <h3>{facilityName}</h3>

        <div className="details-main--info">
          <h4>Contact Info</h4>
          <p>Address: {facilityAddress}</p>
          <p>Email: </p>
          <p>Tel: </p>
        </div>
        
      </div>

    </section>
  )
}

export default InfoDetails;