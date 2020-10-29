import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <section>

      <div className="hero">

        <div className="banner">
          <img src={'https://res.cloudinary.com/project-s/image/upload/v1603972201/banner_eunugo.jpg'} alt="Banner" />
        </div>

        <div className="banner-text">

            <div className="banner-text_intro">
              <img src={'https://res.cloudinary.com/project-s/image/upload/v1603972199/medlink-cross_mpqhag.png'} alt="Hospital Cross" />
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
