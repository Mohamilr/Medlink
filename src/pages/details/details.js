import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import Footer from "../../components/footer/footer";

const Details = () => {
//   const [start, setStart] = useState([]);
//   const [end, setEnd] = useState([]);
  const getPoints = localStorage.getItem("points");
  const points = JSON.parse(getPoints);
//   if (points !== null) {
    // setStart(points[0]);
    // setEnd([points.length - 1]);
//   }
const start = points[0];
const end = points[points.length - 1]

  const markers = [
    {
      lat: start[0],
      lng: start[1],
      status: "Starting point",
    },
    {
      lat: end[0],
      lng: end[1],
      status: "Destination",
    },
  ];

  return (
    <main>
      <Map center={[6.4550575, 3.3941795]} className="mapLayout" zoom={10}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={points} color={"red"} weight={5} />
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
