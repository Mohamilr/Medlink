import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {

  const token = "pk.eyJ1IjoidmlrMSIsImEiOiJja2c5YWNqZHowOG5pMnJ2eWJvOGloM3owIn0.07KDZBZ1aTc2xGIBOm26lw";

  let setLatitude = 6.4550575;
  let setLongitude = 3.3941795;

  const [viewport, setViewport] = useState({
    latitude: setLatitude,
    longitude: setLongitude,
    height: '50vh',
    width: '100vw',
    zoom: 10
  })
  return (
    <section className="map">
      <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/vik1/ckg9cpxi205xp19qsc0tw5el5"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        Map here
      </ReactMapGL>
    </section>
  )
}

export default Map;
