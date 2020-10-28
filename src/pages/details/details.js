import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { useSelector, useDispatch } from 'react-redux';
import Footer from "../../components/footer/footer";

const Details = () => {
  // redux state
  const location = useSelector(state => state.location);
  const coordPoints = useSelector(state => state.detailsCoordinates);
console.log(coordPoints)
//   if (points !== null) {
    // setStart(points[0]);
    // setEnd([points.length - 1]);
//   }
// const start = coordPoints[0];
// const end = coordPoints[coordPoints.length - 1]

  const markers = [
    {
      lat: coordPoints[0][0],
      lng: coordPoints[0][1],
      status: "Starting point",
    },
    {
      lat: coordPoints[coordPoints.length - 1][0],
      lng: coordPoints[coordPoints.length - 1][1],
      status: "Destination",
    },
  ];

  return (
    <main>
      <Map center={[location[0], location[1]]} className="mapLayout" zoom={10}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={coordPoints} color={"red"} weight={5} />
        {markers &&
          markers.map((mark, index) => (
            <Marker key={index} position={[mark.lat, mark.lng]}>
              <Popup>{`${mark.status}`}</Popup>
            </Marker>
          ))}
      </Map>
      <Footer />
    </main>
  );
};

export default Details;
