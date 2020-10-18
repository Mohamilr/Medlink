import React from 'react';
import bannerImage from '../../asset/img/banner.jpg';
import cross from '../../asset/img/medlink-cross.png';
import './banner.css';

const Banner = () => {
  return (
    <section>

      <div className="hero">

        <div className="banner">
          <img src={bannerImage} alt="Banner" />
        </div>

        <div className="banner-text">

            <div className="banner-text_intro">
              <img src={cross} alt="Hospital Cross" />
              <h3>Medlink</h3>
            </div>

            <p>
              Bringing your nearest Healthcare facilities closer to you. <br />Be it a Pharmacy or Hospital.
            </p>
        </div>

      </div>

    </section>
  )
}

export default Banner;
