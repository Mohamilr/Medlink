import React from 'react';
import './infoDetails.css';

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
          {/* <p>Email: not suppli</p>
          <p>Tel: </p> */}
        </div>

      </div>

    </section>
  )
}

export default InfoDetails;