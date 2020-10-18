import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {



  let setLatitude = 6.4550575;
  let setLongitude = 3.3941795;
  let setZoom = 10

  const [viewport, setViewport] = useState({
    latitude: setLatitude,
    longitude: setLongitude,
    height: '50vh',
    width: '90vw',
    zoom: setZoom
  });


  const handleZoomin = () => {

  }

  const handleZoomout = () => {

  }

  return (
    <section className="map-holder">

      <div className="map">

        <div className="text">
          <p>Nice to have you here!</p>
          <h4>See Healthare facilities aroung you</h4>
        </div>

        <div className="zoom">
          <div className="zoom-btn">
            <button className="zoom-btn_clear" onClick={handleZoomin}>+</button>
            <button className="zoom-btn_clear" onClick={handleZoomout}>-</button>
          </div>
        </div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={'pk.eyJ1IjoidmlrMSIsImEiOiJja2c5YWNqZHowOG5pMnJ2eWJvOGloM3owIn0.07KDZBZ1aTc2xGIBOm26lw'}
          mapStyle="mapbox://styles/vik1/ckg9cpxi205xp19qsc0tw5el5"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >

        </ReactMapGL>
      </div>
    </section>
  )
}

export default Map;
