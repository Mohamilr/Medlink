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

  const [nextViewport, setNextViewport] = useState({
    });

  const currentViewPort = {
    latitude: lat,
    longitude: lng,
    height: "50vh",
    width: "90vw",
    zoom: setZoom,
  }

  const [interactionState, setInteractionState] = useState({
    inTransition: true,
    isDragging: true,
    // isPanning: false,
    isRotating: true,
    isZooming: true
  })

  const handleZoomin = () => {};

  const handleZoomout = () => {};

  const handle = () => {
    console.log('lat', lat)
    console.log('lng', lng)
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
            <button className="zoom-btn_clear" onClick={() => handle()}>
              +
            </button>
            <button className="zoom-btn_clear" onClick={handleZoomout}>
              -
            </button>
          </div>
        </div>
        <ReactMapGL
          {...currentViewPort}
          mapboxApiAccessToken={
            "pk.eyJ1IjoidmlrMSIsImEiOiJja2c5YWNqZHowOG5pMnJ2eWJvOGloM3owIn0.07KDZBZ1aTc2xGIBOm26lw"
          }
          mapStyle="mapbox://styles/vik1/ckg9cpxi205xp19qsc0tw5el5"
          onViewportChange={( nextViewport, {} , currentViewPort ) => {
            const {height, width, latitude, longitude, zoom} = currentViewPort;
            setViewport(currentViewPort)

            setNextViewport(
              {
                  height,
                  width,
                  latitude: lat,
                  longitude: lng,
                  zoom
                }
            );



    //         setInteractionState({
    //           inTransition: true,
    // isDragging: true,
    // isPanning: false,
    // isRotating: true,
    // isZooming: true
    //         })
    //         console.log(interactionState)


            console.log(nextViewport)

            // {
            //   height,
            //   width,
            //   latitude: lat,
            //   longitude: lng,
            //   zoom
            // }
          }}
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
                {/* <Popup>{`${data.name}, ${data.address}`}</Popup> */}
              </Marker>
            ))}
        </ReactMapGL>
      </div>
    </section>
  );
};

export default Map;
