import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = ({ results, lat, lng }) => {
  let setLatitude = 6.4550575;
  let setLongitude = 3.3941795;
  let setZoom = 10;

  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
    height: "50vh",
    width: "90vw",
    zoom: setZoom,
  });

  // i made this changes
  const [nextViewport, setNextViewport] = useState({});

  const currentViewPort = {
    latitude: lat,
    longitude: lng,
    height: "50vh",
    width: "90vw",
    zoom: setZoom,
  }
//

  const handleZoomin = () => {};

  const handleZoomout = () => {};

  return (
    <section className="map-holder">
      <div className="map">
        <div className="text">
          <p>Nice to have you here!</p>
          <h4>See Healthare facilities aroung you</h4>
        </div>

        <div className="zoom">
          <div className="zoom-btn">
            <button className="zoom-btn_clear" onClick={handleZoomin}>
              +
            </button>
            <button className="zoom-btn_clear" onClick={handleZoomout}>
              -
            </button>
          </div>
        </div>
        <ReactMapGL
        // kindly take note of this
          {...currentViewPort}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/vik1/ckg9cpxi205xp19qsc0tw5el5"
          onViewportChange={(viewport ) => {
            setViewport(viewport);
          }}
          // i was able to make the map view change with this. but it became un-interactive
          // onViewportChange={(nextViewport, {}, currentViewPort) => {
          // const {height, width, latitude, longitude, zoom} = currentViewPort;
          //   setNextViewport({
          //         height,
          //         width,
          //         latitude: lat,
          //         longitude: lng,
          //         zoom
          //   });
          // }}
        >
          {results &&
            results.map((data, index) => (
              <Marker
                key={index}
                latitude={data.lat}
                longitude={data.lng}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <span>
                  <i className="fas icons fa-map-marker-alt"></i>
                </span>
              </Marker>
            ))}
        </ReactMapGL>
      </div>
    </section>
  );
};

export default Map;
